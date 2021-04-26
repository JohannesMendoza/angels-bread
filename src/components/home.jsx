//home.jsx
//Johannes Mendoza
//Class component that holds all of the information displayed on the home page
import React, { Component } from 'react';
import './styles/home.css';
import Background from '../images/homeGallery/bg.jpg'
import Gallery from 'react-photo-gallery';
import homeGallery from './homeGallery.jsx';
import HomeGallery from './homeGallery.jsx';
import HomeAboutUs from './homeAboutUs.jsx';
import HomeOperation from './homeOperation.jsx';
class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Archivo:500|Open+Sans:300,700" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:900|Work+Sans:300" rel="stylesheet"></link>
                <div className="homePanelContainer" backgroundImage={`url(${Background})`}>
                    <h1 className="homePanelTitle">WELCOME TO ANGEL'S BREAD!</h1>
                    <p className="homePanelDescription">We are home to <p className="goldText">quality handcrafted breads</p>.</p>
                </div>
                <HomeGallery />
                <HomeAboutUs />
                <HomeOperation />
            </div >
        );
    }
    componentDidMount() {
        document.title = "Angel's Bread: Handcrafted Breads";
    }
}

export default Home;