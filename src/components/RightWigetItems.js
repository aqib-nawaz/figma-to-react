import React from "react";
import "./RightWigetItems.css";
import arrow from '../assets/widget-3-icons/arrow.svg'
function RightWigetItems(props) {
    return (
        <li key={props.src} className="right-widgets-list-item">
            <img src={props.src} alt={props.alt} />
            <div className="description">
                <h5>{props.title}</h5>
                <div className="para">{props.desc}</div>
            </div>
            {props.price ? (
                <p className="price">{props.price}$</p>
            ) : (
                <img className="arrow" src={arrow} alt="arrow" />
            )}
        </li>
    );
}

export default RightWigetItems;
