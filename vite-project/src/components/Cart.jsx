import React from 'react'

function Cart(props) {
  const {name, price, type, describe,category, discount, img}=props
  return (
    <div className='cart'>
        <img src={img} className='cart-img' alt="" />
        <p className='cart-price'>
            <span className='price'>{price}</span>
            <span className='discont'>{discount}</span>
            <span className='discount price'>{price}</span>
        </p>
        <h2 className='name'>{name}</h2>
        <p className="cart-describe">{describe}</p>
        <div className='check'>
            <input type="checkbox" id='type' />
            <label htmlFor="type" className='label'>{type}</label>
            <input type="checkbox" id='cat' />
            <label htmlFor="cat" className='label'>{category}</label>
        </div>
    </div>
  )
}

export default Cart