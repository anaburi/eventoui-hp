import React from 'react';
import { useContext } from "react";
import { RoomContext, VenueContext } from "../context";
import Title from "../components/Title";

// get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};


export default function VenueFilter({venues}) {
    const context = useContext(VenueContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        alcohol,
        decorated
    } = context;

// get unique types
let types = getUnique(venues,"type");
//add all
types = ["all",...types];
//map to jsx
types = types.map((item, index) => {
return (
<option value={item} key={index}>
    {item}
    </option>
);
});
let people = getUnique(venues,'capacity');
people = people.map((item,index) => {
return <option key={index} value={item}>{item}</option>
})

    return (
        <section className="filter-container">
            <Title title="search venues" />
            <form className="filter-form">
                {/* {select type} */}
                <div className="form-group">
                    <label htmlFor="type">venue type</label>
                    <select 
                        name="type" 
                        id="type" 
                        value={type}
                        className="form-control"
                        onChange={handleChange}
                        >
                        {types}
                    </select>
                </div>
                {/* {end select type} */}
                {/* {guests} */}
                <div className="form-group">
                    <label htmlFor="capacity">Attendants</label>
                    <select 
                        name="capacity" 
                        id="capacity" 
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}
                        >
                        {people}
                    </select>
                </div>
                {/* {end guests} */}
                {/* {venue price} */}
                    <div className="form-group">
                        <label htmlFor="price">
                            Budget {price} MUR
                        </label>
                        <input type="range" name="price" min={minPrice}
                        max={maxPrice} id="price" value={price} onChange=
                        {handleChange} className="form-control" />
                    </div>
                {/* {end venue price} */}
                {/* {size} */}
                    <div className="form-group">
                        <label htmlFor="size">venue size (event planners)</label>
                        <div className="size-inputs">
                            <input type="number" name="minSize" id="size"
                            value={minSize} onChange={handleChange} 
                            className="size-input"/>
                            <input type="number" name="maxSize" id="size"
                            value={maxSize} onChange={handleChange} 
                            className="size-input"/>
                        </div>
                    </div>
                {/* {end size} */}
                {/* {extras} */}
                    <div className="form-group">
                        <div className="single-extra">
                            <input type="checkbox" name="alcohol" id="alcohol" 
                            checked={alcohol} onChange={handleChange}/>
                            <label htmlFor="alcohol">alcohol provided</label>
                        </div>
                        <div className="single-extra">
                            <input type="checkbox" name="decorated" id="decorated" 
                            checked={decorated} onChange={handleChange}/>
                            <label htmlFor="decorated">decorated venue</label>
                        </div>
                    </div>
                {/* {end extras} */}
            </form>
        </section>
    );
}
