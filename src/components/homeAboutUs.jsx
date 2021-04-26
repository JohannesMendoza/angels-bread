//homeAboutUs
//class component for the "About Us" section on the home.jsx component
import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './styles/homeAboutUs.css';
import AboutUsPic from "../images/homeGallery/IMG_1303.jpg";

class HomeAboutUs extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="aboutUsFlexContainer">
                    <img src={AboutUsPic} className="aboutUsPic" alt="" />
                    <div className="aboutUsDescription">
                        <h1>About Us</h1>
                        <p>Angel's Bread is a Pandemic-Grown Bay Area Filipino Bakery located in Union City, where we pride ourselves on creating <p className="goldText">quality handcrafted pastries</p>. Having Filipino roots, we offer a warm mixture of goodies familiar to home, while also continuing to innovate in the kitchen</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default HomeAboutUs;