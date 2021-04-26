//MenuNav.jsx
//Johannes Mendoza
//This class Component gives an interface to filter out MenuItem content when looking at the Menu
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './styles/menuNav.css';

class MenuNav extends Component {
    state = {

    }

    render() {
        return (
            <React.Fragment>
                <div className="testing">
                    <ul className="menuNavList">
                        <li><Link to="/menu"><button onClick={this.props.handler} className="menuNavButton">Our Menu</button></Link></li>
                        <li><Link to="/menu/specialties"><button onClick={this.props.handler} className="menuNavButton">Specialties</button></Link></li>
                        <li><Link to="/menu/pandesal"><button onClick={this.props.handler} className="menuNavButton">Pandesal</button></Link></li>
                        <li><Link to="/menu/bread"><button onClick={this.props.handler} className="menuNavButton">Breads</button></Link></li>
                        <li><Link to="/menu/sylvanas"><button onClick={this.props.handler} className="menuNavButton">Sylvana</button></Link></li>
                        <li><Link to="/menu/appetizers"><button onClick={this.props.handler} className="menuNavButton">Appetizers</button></Link></li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default MenuNav;