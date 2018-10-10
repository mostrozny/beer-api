import React, { Component } from 'react';
import './BeerSpecs.css';

class BeerSpecs extends Component {
    constructor(props) {
        super(props);



        this.state = {
            id: 0,
            beers: '',
        }
    }


    setId() {
        const id = this.props.match.params.id;
        this.setState({
            id: id,
        }, this.getBeer);
    }

    componentWillMount () {
        this.setId();
    }

    componentDidMount () {

    }

    getBeer() {
        fetch(`https://api.punkapi.com/v2/beers/${this.state.id}`)
            .then( response => response.json() )
            .then( arr => {
                this.setState({
                    beers: arr[0],
                });
            })
    }

  render() {
        const beer = this.state.beers;
      const food = JSON.stringify(beer.food_pairing);
        console.log(beer)
       return (
          <div className="beerSpecs">
              <div className="image">
                  <img src={beer.image_url} />
              </div>

              <div className="content">
                <div>
                    <h2>{beer.name}</h2>
                    <span className="small">{beer.tagline}</span>
                    <hr />
                </div>
                <div>
                    <div className="voltage">
                        <span><b>IBU:</b> {beer.ibu}</span>
                        <span><b>ABV:</b> {beer.abv}</span>
                        <span><b>EBC:</b> {beer.ebc}</span>
                    </div>
                </div>
                <div className="description">
                    {beer.description}
                </div>
                <div className="served">
                    <p>Best served with:</p>
                    {}
                </div>
              </div>
          </div>
       );
  }


}

export default BeerSpecs;
