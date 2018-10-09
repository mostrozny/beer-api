import React, { Component } from 'react';
import './BeerList.css';

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

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  handleClick = (event) => {
        const type = event.target.innerText;
         const page = this.state.page;
        if (page > 0 || page < 19) {
            if (type == "Prev") {
                this.setState({
                    page: page-1,
                })
            } else if (type == "Next") {
                this.setState({
                    page: page+1,
                })
            }
        }
  }


  render() {
      this.getBeers();
      const beerList = this.state.beers;
      const beerListMap = beerList.map((drink, index) => {
          return (
                       <li key={index} className="beerItem">
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
              <button onClick={this.handleClick}>Prev</button>
              <button onClick={this.handleClick}>Next</button>
          </div>
       );
  }
}

export default BeerList;
