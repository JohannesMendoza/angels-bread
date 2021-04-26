//footer.js
//functional component (subject to change) that has links to social media and copyright notice
import React, { Component } from 'react';
import IGLogo from '../images/instagram-icon.png'
import FBLogo from '../images/facebook-icon.png'
import phoneIcon from '../images/phone icon.png'
import './styles/footer.css'

const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer">
                <a href='https://www.instagram.com/angels.bread/?hl=en' target="_blank">
                    <button className="social-button-footer">
                        <img src={IGLogo} className="social-icon-footer"></img>
                    </button>
                </a>
                <a href='https://www.facebook.com/angelaciane/' target="_blank">
                    <button className="social-button-footer">
                        <img src={FBLogo} className="social-icon-footer"></img>
                    </button>
                </a>
                <a href="tel:510-945-8680">
                    <button className="social-button-footer">
                        <img src={phoneIcon} className="social-icon-footer"></img>
                    </button>
                </a>
            </div>
            <div className="footer">
                <p>&#169; 2021 Angel's Bread</p>
            </div>
        </React.Fragment>
    )
}

export default Footer;