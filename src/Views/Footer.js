import React from 'react';
import './Footer.css';

import facebook from '../assets/images/facebook.svg';
import instagram from '../assets/images/instagram.svg';
import linkedin from '../assets/images/linkedin.svg';
import x from '../assets/images/x.svg';
import youtube from '../assets/images/youtube.svg';
import logo from '../assets/images/logo.svg';

const Footer = () => {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footerInner">
        <div className="footerContent">
          <div className="footerColumn">
            <img className="footerLogo" src={logo} alt="Brand logo" />

            <div className="footerBlock">
              <p className="footerLabel">Address:</p>
              <p className="footerText">USA, California</p>
            </div>

            <div className="footerBlock">
              <p className="footerLabel">Contact:</p>
              <div className="footerLinks">
                <a className="footerLink" href="tel:18001234567">1800 123 4567</a>
                <a className="footerLink" href="mailto:javaria.y2b@gmail.com">javaria.y2b@gmail.com</a>
              </div>
            </div>

            <div className="footerSocial" aria-label="Social links">
              <button type="button" className="footerSocialLink" aria-label="Facebook">
                <img className="footerSocialIcon" src={facebook} alt="" />
              </button>
              <button type="button" className="footerSocialLink" aria-label="Instagram">
                <img className="footerSocialIcon" src={instagram} alt="" />
              </button>
              <button type="button" className="footerSocialLink" aria-label="X">
                <img className="footerSocialIcon" src={x} alt="" />
              </button>
              <button type="button" className="footerSocialLink" aria-label="LinkedIn">
                <img className="footerSocialIcon" src={linkedin} alt="" />
              </button>
              <button type="button" className="footerSocialLink" aria-label="YouTube">
                <img className="footerSocialIcon" src={youtube} alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className="footerCredits">
          <div className="footerDivider" />
          <p className="footerCopyright">
            © 2023 Javaria. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
