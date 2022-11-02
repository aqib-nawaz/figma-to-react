import React from "react";
import "./RightWidgets.css";
import RightWigetItems from "./RightWigetItems";
import threedots from '../assets/widget-2-icons/threedots.svg';
function RightWidgets(props) {

    let className = "right-widgets-wrapper"
    if (props.heading === "Properties") {
        className = `right-widgets-wrapper properties-widget`;
    }

    return (
        <div className={className}>
            <div className="right-widgets-header">
                <h3>{props.heading}</h3>
                <img src={threedots} alt="dots" />
            </div>
            <ul className="right-widgets-list">
                {props.data.map((item, index) => (
                    <RightWigetItems
                        key={index}
                        src={
                            props.heading === "Trends"
                                ? require(`../assets/widget-2-icons/${item.name}`)
                                : require(`../assets/widget-3-icons/${item.name}`)
                        }
                        title={item.title}
                        desc={item.status}
                        price={item.price}
                        alt={item.name}
                    />
                ))}
            </ul>
        </div>
    );
}

export default RightWidgets;
