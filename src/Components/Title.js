import React from 'react'
import '../Style/Title.css'
import {Link} from 'react-scroll'

const Title = (props) => {
    return (
        <div className = "hero">
            <div className = "hero-body">
                <h1 className = "title">The Needle Nanny</h1>
            </div>
            <a href='https://www.etsy.com/ca/shop/TheNeedleNanny?ref=simple-shop-header-name&listing_id=1159865656'>Find me on Etsy</a>
            <Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
        </div>
    )
}
export default Title;