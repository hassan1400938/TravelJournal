import React from "react";
import pin from "../assets/location-pin.svg";

export default function Card(props) {
  return (
    <section className="card">
      <img
        className="card--cover-img"
        src={"/src/assets/" + props.coverImage}
      ></img>
      <div className="card--col">
        <div className="card--location-detail">
          <img src={pin} alt="" className="card--pin-img" />
          <span className="card--country">{props.location}</span>
          <a href={props.googleMapsUrl} className="card--google-map-url">
            View on Google Maps
          </a>
        </div>
        <h2 className="card--title">{props.title}</h2>
        <div className="card--dates">
          <span className="card--start-date">{props.startDate}</span>
          <span> - </span>
          <span className="card--end-date">{props.endDate}</span>
        </div>
        <p className="card--description">{props.description}</p>
      </div>
    </section>
  );
}
