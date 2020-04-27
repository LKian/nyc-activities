import React from 'react';
import '../App.css';


const Card = ({ data }) => (
    <div className="card">
        <div className="card-container">
            <span className="tag">
                {data.category}
            </span>
            <div className="neighborhood">{data.neighborhood}</div>
            <div className="description">{data.description}</div>
            <a className="directions" href="{data.directions">Map</a>
        </div>
    </div>
)

export default Card;