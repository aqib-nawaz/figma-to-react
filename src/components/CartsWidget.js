import React from 'react'
import './CartsWidget.css'

function CartsWidget(props) {
    return (
        <div className='cart-widget-contaier'>
            {
                props.data.map((item, index) => <div className='widget-icon-wrapper'>
                    <img className='widget-icon' src={require(`../assets/carts-icons/${item.name}`)} alt={item.name} />
                    <p className='widget-icon-title'>{item.title}</p>
                </div>)
            }
        </div>
    )
}

export default CartsWidget