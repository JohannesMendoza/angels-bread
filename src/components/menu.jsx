//menu.jsx
//Menu is a class component that holds a list of MenuItem components and a menu navigation/filter component called MenuNav 
//The MenuItem components will be filtered based on what sections of the MenuNav is collected
//filtering will occur after a call to the a handler function that will update the state of Menu
import React, { Component } from 'react';
import MenuItem from './menuItem.jsx';
import './styles/menu.css';
import UbePandesal from '../images/menupics/ube-pandesal.jpg';
import SisigNachos from '../images/sisig-nachos.jpg';
import CheeseRoll from '../images/cheese-roll.jpg';
import MenuNav from './menuNav.jsx';
import Background from '../images/ube-pandesal-wallpaper.jpg';
import { withRouter } from 'react-router';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            refresh: false
        };
        this.handler = this.handler.bind(this)

    }
    callMenuAPI(request) {                                                          //method to fetch MenuItem data from server
        fetch(request, {
            method: 'GET',
            cache: "no-cache",
            credentials: "same-origin",
        })
            .then((res) => { return res.json() })           //return data in JSON
            .then((data) => {
                this.setState({
                    items: data.map(item => ({              //map each item from fetched data to state
                        name: item.name,
                        price: item.price,
                        pathname: item.pathName,
                        description: item.description
                    }))
                })
            })
    }
    getMenu() {
        const reqURL = this.props.match.params.Category;
        let apiRequest = (reqURL ? `/api/menuItem/${reqURL}` : '/api/menuItem');
        this.callMenuAPI(apiRequest);
    }
    componentWillMount() {                                                              //complete server side fetch of MenuItems before rendering   
        this.getMenu();
    }
    handler() {                                                                     //function that changes the state of Menu to trigger a refresh of child components
        console.log('handler')
        this.setState({
            refresh: true
        }, () => {
            this.getMenu();
        })
    }

    render() {
        const listItems = this.state.items.map(item =>  //for each item in the state.items array, create a MenuItem component and fill its props with these attributes
            <MenuItem key={item.name} pathName={item.pathname} name={item.name} price={item.price} description={item.description} />
        )
        return (
            <React.Fragment>
                <div className="menuContainer" >
                    <MenuNav className="menuNav" handler={this.handler} />
                    <div className="menuItemContainer">
                        {listItems}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(Menu);