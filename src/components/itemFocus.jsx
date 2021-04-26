//itemFocus.jsx
//JohannesMendoza
//ItemFocus is a class component that displays all information about a menu item in its own page
import { computeHeadingLevel } from '@testing-library/react';
import React, { Component } from 'react';
import './styles/itemFocus.css';
class ItemFocus extends Component {
    state = {

    }
    render() {
        return (
            <React.Fragment>
                <div className="itemFocusContainer">
                    <img className="itemFocusImage" src={this.props.location.state.image}></img>
                    <div className="itemFocusInformation">
                        <p className="itemFocusName">
                            {this.props.location.state.name}
                        </p>
                        <p className="itemFocusPrice">
                            {this.props.location.state.price}
                        </p>
                        <p className="itemFocusDescription">
                            {this.props.location.state.description}
                        </p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ItemFocus;