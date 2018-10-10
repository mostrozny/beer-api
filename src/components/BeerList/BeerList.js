import React, { Component } from 'react';
import './BeerList.css';
import Redirect from "react-router-dom/es/Redirect";

class BeerList extends Component {
    constructor(props) {
        super(props);

        this.state = {
         page: 1,
         per_page: 6,
         beers: [],
        }
    }


    getBeers() {
        fetch(`https://api.punkapi.com/v2/beers?page=${this.state.page}&per_page=${this.state.per_page}`)
            .then( response => response.json() )
            .then( arr => {
                const beers = arr.map(function (drink) {
                    const beer = {
                        id: drink.id,
                        image : drink.image_url,
                        name : drink.name,
                        tagline : drink.tagline,
                    };
                    return beer;
                });

                this.setState({
                    beers: beers,
                });
            })
    }

  handleClickItem = (id) => {
       // return <Redirect to="/BeerSpecs"/>
      this.props.history.push(`/BeerSpecs/${id}`);
  }

  handleClick = (event) => {
        const type = event.target.innerText;

        const page = Number(this.state.page);

         if (page >= 2 || page < 19) {
            if (type === "NEXT") {
                this.setState({
                    page: page+1,
                })
            } else if (type === "PREV") {
                this.setState({
                    page: page-1,
                })
            }
        }
  }


  render() {
      this.getBeers();
      const beerList = this.state.beers;
      const beerListMap = beerList.map((drink, index) => {
          return (
                       <li key={index} onClick={() => this.handleClickItem(drink.id)} className="beerItem">
                          <div className="container">
                                <div className="image">
                                <img src={drink.image} />
                                </div>
                                <div className="text">
                                  <div className="beerName">
                                      <h1>{drink.name}</h1>
                                   </div>
                                  <div className="beerTag">
                                      {drink.tagline}
                                  </div>
                               </div>
                           </div>
                       </li>
        )
      });

       return (
          <div className="beerList">
              <ul className="beers">
                  {beerListMap}
              </ul>
              <div>
                  <button onClick={this.handleClick}>Prev</button>
                  <button onClick={this.handleClick}>Next</button>
              </div>
          </div>
       );
  }
}

export default BeerList;
