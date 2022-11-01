import React from 'react'
import './WidgetEngage.css'


function WidgetEngage() {
    return (
        <div className='widget-container'>
            <div className='widget-img'>
                <img src={require(`../assets/widget-engage/city-1252643 1.png`)} alt="city-1252643" />
            </div>
            <div className='widget-content'>
                <h3>We are working <br />to boost lovely mood</h3>
                <button>Create a Store</button>
            </div>
        </div>
    )
}

export default WidgetEngage