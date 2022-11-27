import React from "react";
import './Card.css'

export default function Card(params) {

    let badgeText
    if (params.item.openSpots === 0) {
        badgeText = "SOLDOUT"
    } else if (params.item.location === "Online") {
        badgeText = "ONLINE"
    }

    console.log(params.item.location === "Online")
    return(
        <div className="card--container">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src = {`../../public/assets/${params.item.coverImg}`} className="card--image" />
            <div className="card--info">
                <div className="card--reviews-score-country">
                    <img className="card--star-icon" />
                    <span className="card--reviews-count grey">
                        {params.item.stats.rating}({params.item.stats.reviewCount})</span>
                    <span className="grey">•</span>
                    <span className="card--country grey">{params.item.location}</span>
                </div>
                <div className="card--description">
                    <p>{params.item.title}</p>
                </div>
                <div className="card--price-per-person">
                    <p><span className="card--price">{params.item.price}</span> / person</p>
                </div>
            </div>
        </div>
    )

}

