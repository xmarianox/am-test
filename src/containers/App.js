import React, { Component } from 'react';
import '../styles/containers/Home.scss';
// Components
import Appbar from '../components/Appbar';
import Loader from '../components/Loader';
import HotelFilterMobile from '../components/HotelFilterMobile';
import HotelFilter from '../components/HotelFilter';
import OrderResultsList from '../components/OrderResultsList';
import HotelsResultList from '../components/HotelsResultList';

/** URL to fetch
 - https://almundo.com.ar/hotels/async/1317380/hotels?date=2017-03-15,2017-03-29&rooms=2&type=CITY
 - https://almundo.com.ar/hotels/async/1317380/allresult?date=2017-02-17,2017-03-10&rooms=2&type=CITY
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

  // Component LifeCycle
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
        
        <Appbar mWidth={this.state.width} mHeight={this.state.height} />
        
        <article className="home-container">

          <Loader visible={this.state.loaderVisible} />

          <div className="container">

            <div className="hotel-detail-info">
              
              <ul className="breadcrumbs">
                <li><a href="" title="Home">Home</a></li>
                <li>/</li>
                <li><a href="" title="Hoteles">Hoteles</a></li>
                <li>/</li>
                <li><a href="" title="madrid">madrid</a></li>
              </ul>

              <div className="information-container">
                <p>Hoteles disponibles para:</p>

                <ul>
                  <li><i className="material-icons">location_on</i> madrid</li>
                  <li><i className="material-icons">date_range</i> 16/03/2017</li>
                  <li><i className="material-icons">date_range</i> 30/03/2017</li>
                  <li><i className="material-icons">person</i> 2 huéspedes</li>
                </ul>

                <a href="" title="Modificar búsqueda">Modificar búsqueda</a>
              </div>

            </div>

            <aside className="aside-filters">

              <HotelFilter data={this.state.hotels} />

              <HotelFilterMobile />

            </aside>

            <div className="main-info">
              <OrderResultsList
                value={this.state.selectedOption}
                options={this.state.orderOptions} 
                onChangeOrder={this._handleOptionChange.bind(this)}
              />
              <HotelsResultList hotels={this.state.hotels} />
            </div>
          </div>
          
        </article>
      </section>
    );
  }


  _handleOptionChange(item) {
    let newOrder = this._orderCollection(item.value);

    this.setState({
      hotels: newOrder,
      selectedOption: item.value
    });
  }

  _orderCollection(orderType) {
    let collection = this.state.hotels;

    // return a new collection sorted by te selected option
    switch(orderType) {
      case 'recommended':
        return collection.sort((a, b) => { 
          return (a === b) ? 0 : a? -1 : 1; 
        });
      case 'price-ASC':
        return collection.sort((a, b) => {
          return parseFloat(a.rate.price.show_amount_per_night_per_room) - parseFloat(b.rate.price.show_amount_per_night_per_room);
        });
      case 'price-DESC':
        return collection.sort((a, b) => {
          return parseFloat(b.rate.price.show_amount_per_night_per_room) - parseFloat(a.rate.price.show_amount_per_night_per_room);
        });
      case 'stars-ASC':
        return collection.sort((a, b) => {
          return parseFloat(a.stars) - parseFloat(b.stars);
        });
      case 'stars-DESC':
        return collection.sort((a, b) => {
          return parseFloat(b.stars) - parseFloat(a.stars);
        });
      
      default:
        return;
    }

  }

}

export default App;
