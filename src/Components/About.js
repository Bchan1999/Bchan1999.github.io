import React from "react";
import '../Style/About.css'

const About = (props) => {
    return (
        <>
            <div className="about-hero" id='about'>
                <ul className="infobar">
                    <li><span>1277</span><br/>Sales</li>
                    <li><span>5.0</span><br/>Average star reviews</li>
                    <li><span>Over 200</span><br/>Needle minders</li>
                </ul>
                <div className="about-me-pic">
                 <img src="#"></img>
                </div>
                
                <div className="aboutme">
                    <h2>Who am I?</h2>
                    <p>My name is Linda Chan and I am a part time  mother and part time crosstching enthusasit.  I wanted to see more cute and humrous neelde minders in stores. So in 2021 I decided to turn my passion into a business. </p>
                </div>

            </div>
        </>
    )
}

export default About