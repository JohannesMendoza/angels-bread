//navbar.jsx
//class Component that allows users to navigate between pages
//the class 
import React, { Component } from 'react';
import './styles/navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.PNG';
import Popup from '../images/popup.png';
import Sprite from '../images/sprite.svg';


class NavBar extends Component {
    state = {
    };
    col = () => {                   //method to toggle collapsible content by modifying the class attribute of elements
        const collapsibles = document.querySelectorAll(".collapsible")
        collapsibles.forEach((item) =>
            item.classList.toggle("collapsible--expanded")
        );
    }
    render() {
        return (
            <React.Fragment>
                <div className="nav-bar collapsible">
                    <Link to="/">
                        <img src={Logo} className="logo"></img>
                        <p className="name">ANGEL'S BREAD</p>
                    </Link>
                    <button className="toggler-button" onClick={this.col}><img src={Popup} class="popup nav__toggler"></img></button>
                    <ul class="nav-bar-buttons collapsible__content">
                        <li className="menuText"><Link to="/menu"><button>OUR MENU</button></Link></li>
                        <li><Link to="/contact"><button>CONTACT US</button></Link></li>
                    </ul>
                </div>
            </React.Fragment >
        )
    }
}

export default NavBar;