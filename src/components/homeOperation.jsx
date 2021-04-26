//homeAboutUs
//class component for the "Hours of Operation" section on the home.jsx component
import React, { Component } from 'react';
import AboutUsPic from "../images/homeGallery/IMG_1249.jpg";

class HomeOperation extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="aboutUsFlexContainer">
                    <div className="aboutUsDescription">
                        <h1>How To Order</h1>
                        <p>All orders must be processed at least one day before pickup</p>
                        <p>DM us on Facebook or Instagram to Order</p>
                        <p>Free delivery within Union City!</p>
                    </div>
                    <img src={AboutUsPic} className="aboutUsPic" alt="" />
                </div>
            </React.Fragment>
        )
    }
}

export default HomeOperation;