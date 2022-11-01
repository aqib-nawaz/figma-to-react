import React from 'react'
import SideBar from './components/SideBar'
import { SideBarData } from './data/SideBarData'
import './App.css'
import Header from './components/Header'
function App() {
    return (
        <div className='main-container'>
            <SideBar data={SideBarData} />
            <Header />
        </div>
    )
}

export default App