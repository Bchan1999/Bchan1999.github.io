import React from 'react'
import '../Style/Shop.css'
import {Link} from 'react-scroll'

const Shop = (props) => {
    return ( 
                    <div className='shop-hero' id='products'>
                                        <div class="top-wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                    </svg>
                </div>
                        <div className='item-container'>
                            <div className='item'>
                                <img src='https://i.etsystatic.com/31084219/c/1630/1630/0/0/il/cae2a3/4103292009/il_340x270.4103292009_qknd.jpg'></img>
                            </div>
                            <div className='item'>
                            <img src='https://i.etsystatic.com/31084219/c/1630/1630/0/0/il/cae2a3/4103292009/il_340x270.4103292009_qknd.jpg'></img>
                            </div>
                            <div className='item'>
                            <img src='https://i.etsystatic.com/31084219/c/1630/1630/0/0/il/cae2a3/4103292009/il_340x270.4103292009_qknd.jpg'></img>
                            </div>
                            <div className='item'>
                            <img src='https://i.etsystatic.com/31084219/c/1630/1630/0/0/il/cae2a3/4103292009/il_340x270.4103292009_qknd.jpg'></img>
                            </div>
                        </div>
                        <div>Shop All</div>
                    </div>
    )
}

export default Shop;