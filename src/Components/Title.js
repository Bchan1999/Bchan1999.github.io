import React from 'react'
import '../Style/Title.css'
import {Link} from 'react-scroll'

const Title = (props) => {
    return (
        <div className = "hero">
            <div className = "hero-body">
                <h1 className = "title">The Needle Nanny</h1>
                <p>Committed to giving you high-quality needle minders for all your neelde art needs.</p>
            </div>
            <div></div>
            <a href='https://www.etsy.com/ca/shop/TheNeedleNanny?ref=simple-shop-header-name&listing_id=1159865656'>Find me on Etsy</a>
            
        </div>
    )
}
export default Title;