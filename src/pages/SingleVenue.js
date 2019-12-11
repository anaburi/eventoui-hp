import React, { Component } from 'react';
import defaultBcg from "../images/venue-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { VenueContext } from "../context";
import StyledHero from "../components/StyledHero";
export default class SingleVenue extends Component {
    constructor(props) {
        super(props)
            // console.log(this.props);
        this.state = {
            ndani: this.props.match.params.ndani,
            defaultBcg
        };
    }
    static contextType = VenueContext;
    // componentDidMount(){}

    render() {
        const { getVenue } = this.context;
        const venue = getVenue(this.state.ndani);
        if (!venue) {
            return <div className = "error" >
                <h3> no such venue could be found </h3>          
                <Link to = "/venues" className = "btn-primary">
                back to venues 
                </Link>  
                </div >
        }
        const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            alcohol,
            decorated,
            images
        } = venue;
        const [mainImg,...defaultImg] = images;
        console.log(defaultImg);

        return ( 
            <>
            <StyledHero img = { mainImg || this.state.defaultBcg }>
            <Banner title = { `${name} venue` }>
            <Link to = '/venues' className = 'btn-primary'>
            back to venues 
            </Link>     
            </Banner>  
            </StyledHero>
            <section className="single-venue">
            <div className="single-venue-images"> 
            {defaultImg.map((item, index) => (
                <img key={index} src={item} alt={name} />
            ))} 
            </div>
            <div className="single-venue-info">
                <article className="desc">
                    <h3>details</h3>
                    <p>{description}</p>
                </article>
                <article className="info">
                    <h3>info</h3>
                    <h6>price : {price} MUR </h6>
                    <h6>size : {size} SQMT</h6>
                    <h6>max capacity : {capacity} people</h6>
                    <h6>{decorated ? "venue is already decorated" : "venue isn't decorated"}</h6>
                    <h6>{alcohol && "alcohol is provided"}</h6>
                </article>
            </div>
            </section>
            <section className="venue-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((item, index) => {
                        return <li key={index}>- {item}</li>;
                    })}
                </ul>
            </section>  
            </>
        );
    }
}