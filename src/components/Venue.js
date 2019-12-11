import React from 'react';
import {Link} from "react-router-dom";
import defaultImg from "../images/venue-1.jpeg";
import PropTypes from "prop-types";

export default function Venue( {venue} ) {
    const{ name, ndani, images, price } = venue;
    
    return (
        <article className="venue"> 
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="venue" />
                <div className="price-top">
                    <h6>{price} MUR</h6>
                    <p>per day</p>
                </div>  
                <Link to={`/venues/${ndani}`} className="btn-primary venue-link">
                    Features
                </Link>
            </div>
            <p className="venue-info">{name}</p>
        </article>
    );
}

Venue.propTypes = {
    venue: PropTypes.shape({
        name: PropTypes.string.isRequired,
        ndani: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired
    })
};
