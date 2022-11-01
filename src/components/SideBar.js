import React from 'react'
import logo from '../assets/sidebar-icons/logo.svg'
import arrow from '../assets/sidebar-icons/7.svg'
import './SideBar.css'
function SideBar(props) {
    return (
        <div className='side-bar'>
            <div className='side-logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='hr' />
            <div className='sidebar-menu'>
                {
                    props.data.map((item, index) => <div key={index} className='icon-wrapper'>
                        <img className="sidebar-icon" src={require(`../assets/sidebar-icons/${item.name}`)} alt={item.name} />
                    </div>)
                }
            </div>
            <div className='arrow'>
                <img src={arrow} alt="arrow" />
            </div>

        </div>
    )
}

export default SideBar