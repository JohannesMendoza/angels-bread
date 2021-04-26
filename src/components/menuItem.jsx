//menuItem.jsx
//MenuItem is a class component that is the interface between the user and access information on an item
//It is composed of a button wrapped in a link that routes to /:itemFocus when clicked
//It will be rendered in an array in the Menu Component
import React, { Component } from 'react';
import './styles/menuItem.css';
import ubePic from '../images/ube-pandesal.jpg';
import { Link } from "react-router-dom";
class MenuItem extends Component {
    //state = {};
    constructor(props) {
        super(props);
        this.state = {
            itemimage: null
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="menu-item-container">
                    <Link to={{
                        pathname: "/ItemFocus/" + this.props.pathName,
                        state: {
                            image: `${process.env.PUBLIC_URL}/TeamLogos/Sundays/${this.props.pathName}.png`,
                            price: this.props.price,
                            name: this.props.name,
                            description: this.props.description
                        }
                    }}>
                        <button className="menu-item-button">
                            <img className="product-image" src={`${process.env.PUBLIC_URL}/menupics/${this.props.pathName}.jpg`}></img>
                            <div className="product-information">
                                <h3 className="product-name">{this.props.name}</h3>
                                <h3 className='product-price'>{this.props.price}</h3>
                                <div className='clear'></div>
                            </div>
                        </button>
                    </Link>
                </div>
            </React.Fragment>

        )
    }
}

export default MenuItem;