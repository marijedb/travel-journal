import React from "react";

function Card(props){
    return(
        <div className="card">
            <div className="card--image-container">
                <img className="card--image" src={props.imageUrl} alt={props.location} />
            </div>
            <div className="card--info-container">
                <div className="card--info-top">
                    <img className="pin" src="./location-pin.png" alt="" />
                    <p className="card--info-location">{props.location}</p>
                    <a className="card--info-link" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card--info-title">{props.title}</h1>
                <p className="card--info-date">{props.startDate} - {props.endDate}</p>
                <p className="card--info-description">{props.description}</p>
            </div>
        </div>
    )
}

export default Card