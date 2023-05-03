import React from 'react'
import rasm from '../assets/dd94o3f-4838d6f4-1ebe-44c9-adc1-764331616842-1 1.png'
import rasm2 from '../assets/1645538281_9-kartinkin-net-p-kartinki-mainkraft-kriper-9 1.png'
function Active() {
  return (
    <div className='row active'>
        <div className="active-card green row">
            <div className="card-content">
                <h2 className="card-t">
                    Играй уже сейчас в Minecraft
                </h2>
                <p>
                    4999 P  <span className='price-discont'>25%</span>
                </p>    
                <div className="button">
                    <button className='active-btn'>Купить</button>   
                    <button className='active-btn'>В избранное</button>  
                </div>           
            </div>
            <img src={rasm2} alt="" className='img-1' />
        </div>
        <div className="active-card hlc row">
            <div className="card-content">
                    <h2 className="card-t">
                        Играй уже сейчас в Minecraft
                    </h2>
                    <p>
                        4999 P  <span className='price-discont'>25%</span>
                    </p>    
                    <div className="button">
                        <button className='active-btn'>Купить</button>   
                        <button className='active-btn'>В избранное</button>  
                    </div>           
                </div>
                <img src={rasm} alt="" className='img-2' />
        </div>
    </div>
  )
}

export default Active