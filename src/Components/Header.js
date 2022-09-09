import React from 'react'
import './../Header.css'

const Header = (props) => {
    return (
        <div>
            <a href='#' >Home</a>
            <div id="menu">
                <a href="#">Shop</a>
                <a href="#">About</a>
                <a href="#">Contact Us</a>
            </div>
        </div>
    )
}

export default Header;