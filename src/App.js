import React, { Component } from 'react';
import './App.css';
import BeerList from "./components/BeerList/BeerList";
import BeerSpecs from "./components/BeerSpecs/BeerSpecs";
import HashRouter from "react-router-dom/es/HashRouter";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";

class App extends Component {
  render() {
      return (
          <div className="App">
              <HashRouter>
                  <div>
                      <Switch>
                          <Route exact path='/' component={BeerList}/>
                          <Route path='/BeerSpecs/:id' component={BeerSpecs}/>
                      </Switch>
                  </div>
              </HashRouter>
          </div>
      );
  }
}

export default App;
