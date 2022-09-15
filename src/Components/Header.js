import React from 'react'

const Header = (props) => {
    return (
        <div>
            
            <nav className = "breadcrumb is-centered is-large"><div >
                <ul>
                    <a href='#' >Home</a>
                   <li><a href="#">Shop</a></li>
                   <li><a href="#">About</a></li>
                   <li><a href="#">Contact Us</a></li>
                   <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
                </ul>             
            </div></nav>
            
        </div>
    )
}

export default Header;