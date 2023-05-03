import React, { useState } from 'react'
import Cart from './Cart'

function Games() {
  const [data,setData]=useState()
  function GetApi(){
    fetch("https://my-json-server.typicode.com/anvarortiqov/Dat/games")
        .then(res=>res.json())
        .then(json=>setData(json))
  }
  GetApi()
  return (
    <div className='games'>
        <div className="games-link">
            <ul className="list">
                <li className='games-item'>
                    Новинки
                </li>
                <li className='games-item'>
                    Новинки
                </li>
                <li className='games-item'>
                    Новинки
                </li>
                <li className='games-item'>
                    Новинки
                </li>
                <li className='games-item'>
                    Новинки
                </li>
            </ul>
        </div>
        <div className="games-row row">
            {
                  data && data.map((item, index)=>{
                    return(
                        <Cart 
                            key={index} 
                            price={item.price} 
                            img={item.img}
                            type={item.type}
                            category={item.category}
                            discount={item.discount}
                            describe={item.describe}
                            />
                    )})  
            }
          
        </div>
    </div>
  )
}

export default Games