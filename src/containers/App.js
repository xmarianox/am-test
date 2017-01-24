import React, { Component } from 'react';
import '../styles/containers/Home.scss';
// Components
import Appbar from '../components/Appbar';
import Loader from '../components/Loader';
import HotelFilterMobile from '../components/HotelFilterMobile';
import OrderResultsList from '../components/OrderResultsList';
import HotelsResultList from '../components/HotelsResultList';


/** URL to fetch
 * 
 *
 
 - https://almundo.com.ar/hotels/async/1317380/hotels?date=2017-03-15,2017-03-29&rooms=2&type=CITY

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
const API_URL = 'https://almundo.com.ar/hotels/async/1317380/hotels?date=2017-03-15,2017-03-29&rooms=2&type=CITY';

class App extends Component {

  constructor() {
    super();

    this.state = {
      hotels: [],
      loaderVisible: true,
      orderOptions: [
        { value: 'recommended', label: 'Más relevantes' },
        { value: 'price-ASC', label: 'Precio más bajo' },
        { value: 'price-DESC', label: 'Precio más alto' },
        { value: 'stars-ASC', label: 'Menos estrellas' },
        { value: 'stars-DESC', label: 'Más estrellas' }
      ],
      selectedOption: 'recommended'
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
        hotels: collection.hotels,
        loaderVisible: false
      })
    });
  }

  render() {
    return (
      <section>
        
        <Appbar />
        
        

        <article className="home-container">

          <Loader visible={this.state.loaderVisible} />

          <div>

            <aside>
              <HotelFilterMobile />

              <OrderResultsList
                value={this.state.selectedOption}
                options={this.state.orderOptions} 
                onChangeOrder={this._handleOptionChange.bind(this)}
              />

            </aside>

            <div>
              <HotelsResultList hotels={this.state.hotels} />
            </div>
          </div>
          
        </article>
      </section>
    );
  }


  _handleOptionChange(item) {
    this.setState({
      selectedOption: item.value
    });
  }

  _orderCollection() {

    let collection = this.state.hotels;
    let orderType = this.state.selectedOption;

/**
 * recommended
 * price-ASC
 * price-DESC
 * stars-ASC
 * stars-DESC
 */
    // let map = collection.map((el, i) => {
    //   return 
    // })

  }


}

export default App;
