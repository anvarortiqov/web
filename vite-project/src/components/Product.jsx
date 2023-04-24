import React, { useState } from 'react'
import Cart from './Cart'
function Product() {
  const [data, setData]=useState()
  function GetData(){
    fetch("https://my-json-server.typicode.com/anvarortiqov/Dat/product")
        .then((res)=>res.json())
        .then((json)=>setData(json))
  }
  GetData()
  return (
    <div>
        <h2>Product</h2>
        <div className="wrapper">
            {
                data && data.map((item,index)=>{
                    return(
                        <Cart 
                            key={index} 
                            name={item.name}
                            price={item.price} 
                            img={item.img}
                            type={item.type}
                            category={item.category}
                            discount={item.discount}
                            describe={item.describe}
                            />
                    )
                })
            }
        </div>
       
    </div>
  )
}

export default Product