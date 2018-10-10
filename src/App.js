import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BeerList from "./components/BeerList/BeerList";

class App extends Component {
  render() {
       return (
          <div className="App">
            

              <BeerList/>
          </div>
       );
  }
}

export default App;
