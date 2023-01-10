import React from "react";
import '../Style/Reviews.css'

const Reviews = (props) => {
    return (
        <>
            <div className="reviews-hero">
                    <div class="bottom-wave">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                        </svg>
                    </div>
                <div className="review-body-format">
                    <h2>Customer Reviews</h2>
                    <ul>
                        <li>
                            {/* <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z"></path></svg></div> */}
                            <div className="customer-header">
                               <div className="customer-pic"><img src={require('../images/melissa.webp')}></img></div>
                                <div className="customer">Melissa</div>
                                <div className="star"><img src={require('../images/rating.png')}></img></div> 
                            </div>
                            <div className="purchase-info">    
                                <div className="comment">Great quality and it was a gift that was loved.</div>
                                <div className="purchase"><img src={require('../images/stabycat.webp')}></img></div>
                            </div>
                        </li>
                        <li>
                            <div className="customer-header">
                                <div className="customer-pic"><img src={require('../images/julie.webp')}></img></div>
                                <div className="customer">Julie<br/></div>
                                <div className="star"><img src={require('../images/rating.png')}></img></div>
                           </div>
                            <div className="purchase-info">
                                <div className="comment">This one is adorable! Fast shipping and always top quality!</div>
                                <div className="purchase"><img src={require('../images/catramen.webp')}></img></div>
                            </div>
                        </li>
                        <li>
                        <div className="customer-header">
                            <div className="customer-pic"><img src={require('../images/tracy.webp')}></img></div>
                            <div className="customer">Tracy</div>
                            <div className="star"><img src={require('../images/rating.png')}></img></div>
                        </div>   
                            <div className="purchase-info">
                                <div className="comment">This is very cute! My daughter-in-law is going to love it. Looks exactly as expected, good quality. The seller was excellent with communication.</div>
                                <div className="purchase"><img src={require('../images/once.webp')}></img></div>
                            </div>
                        </li> 
                    </ul>
                </div> 

            </div>
        </>
    )
}

export default Reviews