import React from "react";
import '../Style/About.css'

const About = (props) => {
    return (
        <>
          <div className="about-hero" id='about'>
                <div class="top-wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                    </svg>
                </div>
                <ul className="infobar">
                    <li><span>2000+</span><br/>Sales</li>
                    <li><span>5/5</span><br/>Average star reviews</li>
                    <li><span>Over 200</span><br/>Needle minders</li>
                </ul>

                <div className="bottom-div">
                   <div class="bottom-wave">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                        </svg>
                    </div>  
                </div>
                <div className="bio">
                    <img id='face' src={require('../images/mom.jpg')}></img>
                    <div className="aboutme">
                        <h2>Who am I?</h2>
                        <p>Hello! My name is Linda. I’m a cat loving, cross stitching and baking enthusiast from Alberta. I learned how to cross stitch about 30 years ago. Since then I never stopped. I also love needlepoint, tapestry and embroidery. I have always had a obsession with needle minders and decided to open my own Etsy shop. I am constantly doing research and looking for new products. I carry a wide variety of needle minders.
I take time to carefully package each order.  My goal is to make you feel special ordering from my shop.
If you have any questions, please don’t hesitate to contact me.</p>
                    </div>
                </div> 
                
            </div>

        </>
    )
}

export default About