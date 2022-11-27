import React from "react";
import './Card.css'

export default function Card(params) {

    params.key
    return(
        <div className="card--container">
            {params.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
            <img src = {`../../public/assets/${params.img}`} className="card--image" />
            <div className="card--info">
                <div className="card--reviews-score-country">
                    <img className="card--star-icon" />
                    <span className="card--reviews-count grey">{params.rating}({params.reviews_count})</span>
                    <span className="grey">•</span>
                    <span className="card--country grey">{params.country}</span>
                </div>
                <div className="card--description">
                    <p>{params.description}</p>
                </div>
                <div className="card--price-per-person">
                    <p><span className="card--price">{params.card_price}</span> / person</p>
                </div>
            </div>
        </div>
    )

}

