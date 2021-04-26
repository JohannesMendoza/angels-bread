//contact.jsx
//Johannes Mendoza
//Contact is a class component that holds all forms of contact information for the company, including phone number and social media
import React, { Component } from 'react';
import './styles/contact.css'
import IGLogo from '../images/instagram-icon.png'
import FBLogo from '../images/facebook-icon.png'
import phoneIcon from '../images/phone icon.png'
class Contact extends Component {

    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="Contact">
                    <a href='https://www.instagram.com/angels.bread/?hl=en' target="_blank">
                        <button className="social-button">
                            <img src={IGLogo} className="social-icon"></img>
                            <h3>Follow us on Instagram</h3>
                        </button>
                    </a>
                    <a href='https://www.facebook.com/angelaciane/' target="_blank">
                        <button className="social-button">
                            <img src={FBLogo} className="social-icon"></img>
                            <h3>Follow us on Facebook</h3>
                        </button>
                    </a>
                    <button className="social-button">
                        <img src={phoneIcon} className="social-icon"></img>
                        <h3>Text or Call us at <a href="tel:510-945-8680">(650)892-5952</a></h3>
                    </button>
                </div>
            </React.Fragment >
        );
    }
    componentDidMount() {
        document.title = 'Contact Us';
    }
}

export default Contact;