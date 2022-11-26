import React from "react";
import './HeroSection.css'

export default function HeroSection(property) {
    return(
    <div className="hero--whole">
        <div className="hero--collage">
            <img className="hero--collage-img" src={property.hero_image}/>
        </div>
        <div className="hero--titletext">
            <h1>{property.title}</h1>
            <p>{property.text}</p>
        </div>
    </div>
    )
}