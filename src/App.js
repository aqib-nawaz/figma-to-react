import React from "react";
import SideBar from "./components/SideBar";
import { SideBarData } from "./data/SideBarData";
import { CartWidgetData } from "./data/CartWidgetData";
import "./App.css";
import Header from "./components/Header";
import CartsWidget from "./components/CartsWidget";
import WidgetEngage from "./components/WidgetEngage";
import RightWidgets from "./components/RightWidgets";
import { TrendWidgetData } from "./data/TrendWidgetData";
import { PropertiesWidgetData } from "./data/PropertiesWidgetData";



function App() {
    return (
        <div className="main-container">
            <SideBar data={SideBarData} />
            <Header />
            <CartsWidget data={CartWidgetData} />
            <WidgetEngage />
            <RightWidgets
                heading="Trends"
                data={TrendWidgetData}
            />
            <RightWidgets
                heading="Properties"
                data={PropertiesWidgetData}
            />
        </div>
    );
}

export default App;
