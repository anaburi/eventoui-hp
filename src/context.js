import React, { Component } from 'react';
// import items from "./data";
import Client from "./Contentful";

const VenueContext = React.createContext();
// <VenueContext.Provider value={'hello'}

class VenueProvider extends Component {
    state = {
        venues: [],
        sortedVenues: [],
        featuredVenues: [],
        loading: true,
        type:"all",
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        alcohol:false,
        decorated:false
    };
    // getData
getData = async () => {
    try {
        let response = await Client.getEntries({
            content_type: "eventouiVenuesExample",
            order: "sys.createdAt"
        });
        let venues = this.formatData(response.items);
        let featuredVenues = venues.filter(venue => venue.featured === true);
        let maxPrice = Math.max(...venues.map(item => item.price));
        let maxSize = Math.max(...venues.map(item => item.size));
        this.setState({
            venues, 
            featuredVenues, 
            sortedVenues: venues, 
            loading: false,
            price:maxPrice,
            maxPrice,
            maxSize
    });
 } catch (error) {
        console.log(error);
    }
}


    componentDidMount(){
        this.getData()
        
    }

    formatData(items){
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            
            let venue = {...item.fields,images,id};
            return venue;
        });
        return tempItems;
    }
    getVenue = (ndani) => {
        let tempVenues = [...this.state.venues];
        const venue = tempVenues.find(venue => venue.ndani === ndani);
        return venue;
    };
handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked:target.value;
    const name = event.target.name;
    this.setState(
        {
            [name]: value
        },
        this.filterRooms
    );
};
filterRooms = () => {
    let{
        venues, type, capacity, price, minSize, maxSize, alcohol, decorated
    } = this.state;

// all the venues
let tempVenues = [...venues];
//transform value
capacity = parseInt(capacity)

// filter by type
if(type !== 'all'){
    tempVenues = tempVenues.filter(venue => venue.type === type);
}

// filter by capacity
if(capacity !==1){
    tempVenues = tempVenues.filter(venue => venue.capacity >= capacity)
}

//filter by price
tempVenues = tempVenues.filter(venue => venue.price <= price);

//filter by size
tempVenues = tempVenues.filter(venue => venue.size >= minSize && 
    venue.size <= maxSize)

//filter by alcohol provision
if(alcohol){
    tempVenues = tempVenues.filter(venue => venue.alcohol === true)
}

//filter by decoration
if(decorated){
    tempVenues = tempVenues.filter(venue => venue.decorated === true)
}

//change state
this.setState({
    sortedVenues:tempVenues
})
};

    render() {
        return (
            <VenueContext.Provider value={{ ...this.state, 
            getVenue: this.getVenue,
            handleChange: this.handleChange 
            }}>
                {this.props.children}
            </VenueContext.Provider>
        );
    }
}

const VenueConsumer = VenueContext.Consumer;

export function withVenueConsumer(Component){
    return function ConsumerWrapper(props){
        return <VenueConsumer>
            {value => <Component {...props} context={value}/>}
        </VenueConsumer>
    }
}

export { VenueProvider, VenueConsumer, VenueContext };
