import React, { Component } from 'react';
import { VenueContext } from "../context";
import Loading from "./Loading";
import Venue from "./Venue";
import Title from "./Title";

export default class FeaturedVenues extends Component {
    static contextType = VenueContext
    render() {
    let { loading, featuredVenues : venues } = this.context;
    venues = venues.map(venue => {
        return <Venue key={venue.id} venue={venue}/>;
    });

    return (
    <section className="featured-venues">
        <Title title="featured venues"/>
        <div className="featured-venues-center">
        { loading ? <Loading /> : venues }
        </div>
    </section>    
    );
    }
}
