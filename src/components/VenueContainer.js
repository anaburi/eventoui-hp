import React from 'react';
import VenuesFilter from "./VenueFilter";
import VenuesList from "./VenueList";
import {withVenueConsumer} from "../context";
import Loading from "./Loading";

function VenueContainer({context}){
const {loading, sortedVenues, venues} = context;
    if (loading) {
        return <Loading />;
        }
        return (
            <>
                <VenuesFilter venues={venues} />
                <VenuesList venues={sortedVenues} />
            </>
        );
}

export default withVenueConsumer(VenueContainer)

// import React from 'react';
// import VenuesFilter from "./VenueFilter";
// import VenuesList from "./VenueList";
// import {VenueConsumer} from "../context";
// import Loading from "./Loading";

// export default function VenueContainer() {
//     return (
//         <VenueConsumer>
//             {value => {
//                 const {loading, sortedVenues, venues} = value
//                 if (loading) {
//                     return <Loading />;
//                 }
//         return (
//             <div>
//                 Hello from Venues Container
//                 <VenuesFilter venues={venues} />
//                 <VenuesList venues={sortedVenues} />
//             </div>
//         );
//     }}
//         </VenueConsumer>  
//     );
// }
