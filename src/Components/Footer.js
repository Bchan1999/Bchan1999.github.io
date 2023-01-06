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
          <p>Instagram</p>
          <p>Etsy</p>
          <p>Website</p>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <p>Get help with using our product.</p>
        </div>
      </div>
      <p className="copyright">Copyright © 2022 The Needle Nanny</p>
    </footer>
  );
};

export default Footer;