import React from 'react'
import '../Style/RightNav.css'
import {Link} from 'react-scroll'

const RightNav = (props) => {
    return ( 
                    <ul className = "menu">
                        <li><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
                        <li><Link to="products" spy={true} smooth={true} offset={50} duration={500}>Products</Link></li>    
                        <li><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
                    </ul>      
      
    )
}

export default RightNav;