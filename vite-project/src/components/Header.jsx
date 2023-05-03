import React from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import { IconContext } from 'react-icons/lib'

function Header() {
  return (
     
        <nav className='nav container row'>
            <div className="logo">
                <a href="#" class='logo-link'><img src="" alt="" /></a>
            </div>
            <ul>
                <li>
                    <a href="#" className='nav-link'>Home</a>
                </li>
                <li>
                    <a href="#" className='nav-link'>Feedback</a>
                </li>
                <li>
                    <a href="#" className='nav-link'>How about buy</a>
                </li>
                <li>
                    <a href="#" className='nav-link'>Cashback</a>
                </li>
                <li>
                    <a href="#" className='nav-link'>PAys</a>
                </li>
            </ul>
            <div className="buy">
           
                        <FiShoppingCart/>
     
            </div>
        </nav>
   
  )
}

export default Header