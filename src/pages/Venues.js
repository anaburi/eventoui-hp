import React from 'react';
import Hero from '../components/Hero';
import Banner from "../components/Banner";
import { Link } from 'react-router-dom';
import VenueContainer from "../components/VenueContainer";

const Venues = () => {
    return (
    <>
    <Hero hero="venuesHero">
        <Banner title="explore venues">
            <Link to="/" className="btn-primary">
                return home
            </Link>
        </Banner>
    </Hero>
    <VenueContainer />
    </>
    );
};

export default Venues;

