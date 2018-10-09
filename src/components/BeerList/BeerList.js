import React, { Component } from 'react';
import './BeerList.css';

class BeerList extends Component {
    getBeers() {
        fetch( 'https://api.punkapi.com/v2/beers' )
            .then( response => response.json() )
            .then( arr => {
                const beers = arr.map(function (drink) {
                    const beer = {
                        image : drink.image_url,
                        name : drink.name,
                        tagline : drink.tagline,
                    }
                    return beer;
                })

                const beerList = document.querySelector( 'ul.beers' );

                beers.map(function(drink){
                    beerList.innerHTML += `
                       <li class="beerItem">
                          <div class="container">
                                <div class="image">
                                <img src="${drink.image}"/>
                                </div>
                                <div class="text">
                                  <div class="beerName">
                                      <h1>${drink.name}</h1>
                                   </div>
                                  <div class="beerTag">
                                      ${drink.tagline}
                                  </div>
                               </div>
                           </div>
                       </li>`
                    return null;
                })
            })
    }

  render() {
      this.getBeers();

       return (
          <div className="beerList">
              <ul className="beers">

              </ul>
          </div>
       );
  }
}

export default BeerList;
