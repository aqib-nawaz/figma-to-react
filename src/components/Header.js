import React from 'react'
import './Header.css'
import search from '../assets/header-icons/search.svg'
import notification from '../assets/header-icons/notification.svg'
import person from '../assets/header-icons/person.svg'

function Header() {
    return (
        <div className='header-container'>
            <h3 className='header-left'>Categories</h3>
            <div className='header-right'>
                <form className='form'>
                    <img className="search-icon" src={search} alt="search" />
                    <input type="search" className="search" />
                </form>
                <img className="notification" src={notification} alt="notification" />
                <img className="person" src={person} alt="person" />
                <div className='btn'>
                    New Goals
                </div>
            </div>

        </div>
    )
}

export default Header