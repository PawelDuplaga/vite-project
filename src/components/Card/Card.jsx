import React from "react";
import './Card.css'

export default function Card(params) {

    return(
        <div className="card--container">
            <img src = {`../../public/assets/${params.img}`} className="card--image" />
            <div className="card--info">
                <div className="card--reviews-score-country">
                    <img className="card--star-icon" />
                    <span className="card--reviews-count grey">({params.reviews_count})</span>
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

git config --global user.email "pawelduplagait@gmail.com"
git config --global user.name "PawelDuplaga"

