import React from 'react';
import Venue from "./Venue";

export default function VenueList({venues}) {
if (venues.length === 0){
    return (
        <div className="empty-search">
            <h3>unfortunately, no venues matched your search parameters</h3>
        </div>
    )
}
return (
<section className="venueslist">
    <div className="venueslist-center">
        {venues.map(item => {
            return <Venue key={item.id} venue={item} />;
        })}
    </div>
</section>
);
}
