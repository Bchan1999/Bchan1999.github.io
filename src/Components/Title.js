import React from 'react'
import '../Style/Title.css'
import {Link} from 'react-scroll'

const Title = (props) => {

    function etsyLink(e) {
        console.log('test')
    }

    return (
        <div className = "hero">
            <div id="shop-link" onClick={etsyLink}>
                <div id="link">
                <a href='https://www.etsy.com/ca/shop/TheNeedleNanny?ref=simple-shop-header-name&listing_id=1159865656'>Find me on</a>
                <img src={require('../images/etsy.png')}></img>
                </div>
            </div> 
            <div className='needle-logo'><img src={require('../images/logo.png')}/></div>
            <div className = "hero-body">
                <h1 className = "title">The Needle Nanny</h1>
                <p>Committed to giving you high-quality needle minders for all your needle art needs.</p>
            </div>
            

                <div class="top-wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                    </svg>
                </div>
        </div>
    )
}
export default Title;