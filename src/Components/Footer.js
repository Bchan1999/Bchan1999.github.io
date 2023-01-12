import React from 'react';
import {Link} from 'react-scroll'
import '../Style/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About Us</Link></h3>
          <p><Link to="about" spy={true} smooth={true} offset={50} duration={500}>Learn more about our company and mission.</Link></p>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <a href='https://www.instagram.com/theneedlenanny/'><p>Instagram</p></a>
          <a href='https://www.etsy.com/ca/shop/TheNeedleNanny?ref=simple-shop-header-name&listing_id=1159865656'><p>Etsy</p></a>
          <a href='https://theneedlenanny.com/'><p>Website</p></a>
        </div>
      </div>
      <p className="copyright">Copyright © 2022 The Needle Nanny</p>
    </footer>
  );
};

export default Footer;