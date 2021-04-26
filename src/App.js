//App.js
//App is a class component that is the base of the application
//Holds all of the main class components
import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Component, useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import NavBar from "./components/navbar";
import Logo from './images/logo.PNG';
import Contact from './components/contact.jsx';
import Background from './images/bg.jpeg'
import Footer from './components/footer'
import Menu from './components/menu'
import ItemFocus from './components/itemFocus'
import BounceLoader from "react-spinners/BounceLoader";
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Angel's Bread
        </a>
      </header>
    </div>
  );
}*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    setTimeout(() => { this.setState({ loading: false }) }, 2000)
    return (
      <div className="whole-container">
        {
          this.state.loading ?
            <BounceLoader className="loading" size={150} color={"#123abc"} loading={this.state.loading} />
            :
            <div>
              <div>
                <div className="nav-container">
                  <NavBar />
                  <div>
                    <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/menu/:Category" component={Menu} />
                      <Route path="/menu" component={Menu} />
                      <Route path="/contact" component={Contact} />
                      <Route path="/itemFocus" component={ItemFocus} />
                    </Switch>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
        }
      </ div>
    )
  }
}
export default App;
