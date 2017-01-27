import React, {Component} from 'react';
import '../styles/components/HotelFilter.scss';


class HotelFilter extends Component {

    render() {
        return (
            <div className="HotelFilter">
                
                <div className="results-map">
                    <img src="https://almundo.com.ar/hotels/static/27/images/result-map.png" alt="Ver hoteles en el mapa" />
                    <a href="#" title="Ver hoteles en el mapa">Ver hoteles en el mapa</a>
                </div>


                <div>
                    <h2>Filtrar</h2>

                    <div className="item-filter">
                        <header>
                            <span><i className="material-icons">search</i> Nombre de hotel</span>
                        </header>

                        <div className="item-filter-form-control">
                            <input type="text" name="hotel-name" placeholder="Ingrese el nombre del hotel"/>
                            <button className="btn btn-secondary">Aceptar</button>
                        </div>
                    </div>

                    <div className="item-filter">
                        <header>
                            <span><i className="material-icons">attach_money</i> Precio por noche</span>
                        </header>
                    </div>

                    <div className="item-filter">
                        <header>
                            <span><i className="material-icons">star_rate</i> Estrellas</span>
                        </header>

                        <label htmlFor="stars_filter">
                            <input 
                                type="checkbox" 
                                name="stars_filter" 
                                value="all"
                                onChange={this._handleInputChange.bind(this)} 
                            />
                            <span>Todas las estrellas</span>
                        </label>

                        <label htmlFor="stars_filter">
                            <input 
                                type="checkbox" 
                                name="stars_filter" 
                                value="5" 
                                onChange={this._handleInputChange.bind(this)} 
                            />
                            <span>
                                <i className="material-icons">star_rate</i>
                                <i className="material-icons">star_rate</i> 
                                <i className="material-icons">star_rate</i> 
                                <i className="material-icons">star_rate</i> 
                                <i className="material-icons">star_rate</i> 
                            </span>
                        </label>

                        <label htmlFor="stars_filter">
                            <input 
                                type="checkbox" 
                                name="stars_filter" 
                                value="4" 
                                onChange={this._handleInputChange.bind(this)} 
                            />
                            <span>
                                <i className="material-icons">star_rate</i>
                                <i className="material-icons">star_rate</i> 
                                <i className="material-icons">star_rate</i> 
                                <i className="material-icons">star_rate</i>
                            </span>
                        </label>

                        <label htmlFor="stars_filter">
                            <input 
                                type="checkbox" 
                                name="stars_filter" 
                                value="3" 
                                onChange={this._handleInputChange.bind(this)} 
                            />
                            <span>
                                <i className="material-icons">star_rate</i>
                                <i className="material-icons">star_rate</i> 
                                <i className="material-icons">star_rate</i>
                            </span>
                        </label>

                        <label htmlFor="stars_filter">
                            <input 
                                type="checkbox" 
                                name="stars_filter" 
                                value="2" 
                                onChange={this._handleInputChange.bind(this)} 
                            />
                            <span>
                                <i className="material-icons">star_rate</i>
                                <i className="material-icons">star_rate</i> 
                            </span>
                        </label> 

                        <label htmlFor="stars_filter">
                            <input 
                                type="checkbox" 
                                name="stars_filter" 
                                value="1" 
                                onChange={this._handleInputChange.bind(this)} 
                            />
                            <span>
                                <i className="material-icons">star_rate</i>
                            </span>
                        </label> 
                                           
                    </div>

                </div>

            </div>
        );
    }


    _handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
}

export default HotelFilter;