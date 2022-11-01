import React from "react";
import './TrendsWidget.css'
import { TrendWidgetData } from "../data/TrendWidgetData";
import TrendsList from "./TrendsList";
import threedots from '../assets/widget-2-icons/threedots.svg'
function TrendsWidget() {
    return (
        <div className="trend-widget-wrapper">
            <div className="trend-widget-header">
                <h3>Trends</h3>
                <img src={threedots} alt="dots" />
            </div>
            <ul className="trend-widget-list">
                {TrendWidgetData.map((item, index) => (
                    <TrendsList
                        src={require(`../assets/widget-2-icons/${item.name}`)}
                        key={index}
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

export default TrendsWidget;
