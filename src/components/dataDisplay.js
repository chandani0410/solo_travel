import React from "react";

export default function Journal(props){
    return(
        <div>
            <div className="location-card">
                <div className="image-location">
                    <img src={props.imageUrl} alt = "Mount FIJI" className="location-image"/>
                </div>
                <div className="location-detail">
                    <div className="location-map">
                        <img src="/images/gps_logo.png" className="gps-logo"/>
                        <span className="location-country">{props.location}</span>
                        <a href={props.googleMapsUrl} className="location-link" target='blank'><ul>View on Google Maps</ul></a>
                    </div>
                    <h2 className="location-title">{props.title}</h2>
                    <h5 className="location-dates">{props.startDate} - {props.endDate}</h5>
                    <p className="location-description">{props.description}</p></div>
            </div>
            <hr></hr>
        </div>
    )
}