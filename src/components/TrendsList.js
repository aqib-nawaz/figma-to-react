import React from 'react'
import './TrendsList.css'
function TrendsList(props) {
    return (
        <li key={props.key} className='trend-widget-list-item'>
            <img src={props.src} alt={props.alt} />
            <div className='description'>
                <h5>{props.title}</h5>
                <div className='para'>{props.desc}</div>
            </div>
            <p className='price'>{props.price}$</p>
        </li>
    )
}

export default TrendsList