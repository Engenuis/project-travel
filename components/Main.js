import React from 'react'

export default function Main(props) {
    
    return(
        <div className = "card-list">
          <img src = {props.imageUrl} />
          <section className = "information">
            <p className = "location" >
              <img src = "../images/spot.png" />
              {props.location.toUpperCase()} 
              <a  href = {props.googleMapsUrl} target = "_blank" >View on Google Maps</a>
            </p>
            <h1>{props.title}</h1>
            <h3>{props.startDate} - {props.endDate}</h3>
            <p className = "description">{props.description}</p>
          </section>
        </div>
    )
}