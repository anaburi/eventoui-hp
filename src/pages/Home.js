import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from '../components/Services';
import FeaturedVenues from "../components/FeaturedVenues";
export default function Home() {
    return ( 
    <>
        <Hero>
        <Banner title = "Rent a venue"
        subtitle = "personalized venues starting at 30, 000 MUR per day " >
        <Link to = "/venues" className = "btn-primary" >
        explore venues 
        </Link>   
        </Banner>   
        </Hero>   
        <Services/>
        <FeaturedVenues/>
        </>
    );
}