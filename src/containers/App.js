import React, { Component } from 'react';

// Components
import Appbar from '../components/Appbar';



/** URL to fetch
 - https://almundo.com.ar/hotels/async/1317380/allresult?date=2017-02-17,2017-03-10&rooms=2&type=CITY

Response:
  hotels: [
    {
      "id": "46893",
      "name": "Espahotel Gran Via 65",
      "slug": "espahotel-gran-via-65-46893",
      "stars": 3,
      "position": [
        40.42267,
        -3.70992
      ],
      "image": "//images.almundo.com/201/1000000/70000/64100/64013/64013_44_b.jpg",
      "price": {
        "discount": 0,
        "amount": 1546.25,
        "code": "ARS"
      },
      "recommended": true,
      "hotel_chain": ""
    }
  ]
*/


const API_URL = 'https://almundo.com.ar/hotels/async/1317380/allresult?date=2017-02-17,2017-03-10&rooms=2&type=CITY';

class App extends Component {

  constructor() {
    super();

    this.state = {
      hotels: []
    };
  }

  componentDidMount() {
    fetch(API_URL).then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    }).then((collection) => {
      // console.log(`HOTELES: ${collection.hotels}`);
      this.setState({
        hotels: collection.hotels
      })
    });
  }

  render() {
    return (
      <section>
        <Appbar />


        <ul>
          {
            this.state.hotels.map((hotel) => {
              return <li key={hotel.id}>{hotel.name}</li>
            })
          }
        </ul>

      </section>
    );
  }
}

export default App;
