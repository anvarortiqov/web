import React from 'react'
import Cart from './Cart'
import { useState } from 'react'
function Promo() {
  const [data,setData]=useState()
  function GetApi(){
      fetch("https://my-json-server.typicode.com/anvarortiqov/Dat/promo")
          .then(res=>res.json())
          .then(json=>setData(json))
  }
 GetApi()
  return (
    <div className='promo'>
        <h2 className="promo-title">
          Акции и скидки <span className='green'> %</span>
        </h2>
        <div className="promo-row row">
            {
                data && data.map((elem,index)=>{
                    return(
                        <Cart
                        key={index} 
                        price={elem.price} 
                        img={elem.img}
                        type={elem.type}
                        category={elem.category}
                        discount={elem.discount}
                        describe={elem.describe}
                    />
                    ) 
                })
            }
        </div>
       
    </div> 
  )
}

export default  Promo