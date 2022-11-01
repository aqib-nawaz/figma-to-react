import React from 'react'
import SideBar from './components/SideBar'
import { SideBarData } from './data/SideBarData'
import { CartWidgetData } from './data/CartWidgetData'
import './App.css'
import Header from './components/Header'
import CartsWidget from './components/CartsWidget'
import WidgetEngage from './components/WidgetEngage'
import TrendsWidget from './components/TrendsWidget'




function App() {
    return (
        <div className='main-container'>
            <SideBar data={SideBarData} />
            <Header />
            <CartsWidget data={CartWidgetData} />
            <WidgetEngage />
            <TrendsWidget />
        </div>
    )
}

export default App