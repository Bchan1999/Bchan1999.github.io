import React from 'react'
import '../Style/Header.css'

const Header = (props) => {
    return ( 
                <div className='navbar'>
                    
                    <ul className = "menu">
                    <li><a id='logo' href='#' >Home</a></li>
                    <li><a href="#">Shop</a></li>
                     <li><a href="#">About</a></li>
                     <li><a href="#">Contact Us</a></li>
                    </ul>      
                </div>       
    )
}

export default Header;