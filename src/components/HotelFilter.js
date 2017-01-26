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

                    <div>
                        <span><i className="material-icons">search</i> Nombre de hotel</span>

                        <div>
                            <input type="text" name="hotel-name" placeholder="Ingrese el nombre del hotel"/>
                            <button className="btn btn-action">Aceptar</button>
                        </div>
                    </div>

                    <div>
                        <span><i className="material-icons">attach_money</i> Precio por noche</span>
                    </div>


                    <div>
                        <span><i className="material-icons">star_rate</i> Estrellas</span>

                        <label for="">
                            <input type="checkbox" name="" value="" />
                            <span>Todas las estrellas</span>
                        </label>

                        <label for="">
                            <input type="checkbox" name="" value="" />
                            <span>
                                <i className="material-icons">star_rate</i>
                                <i className="material-icons">star_rate</i> 
                                <i className="material-icons">star_rate</i> 
                                <i className="material-icons">star_rate</i> 
                                <i className="material-icons">star_rate</i> 
                            </span>
                        </label>

                        <label for="">
                            <input type="checkbox" name="" value="" />
                            <span>
                                <i className="material-icons">star_rate</i>
                                <i className="material-icons">star_rate</i> 
                                <i className="material-icons">star_rate</i> 
                                <i className="material-icons">star_rate</i>
                            </span>
                        </label>

                        <label for="">
                            <input type="checkbox" name="" value="" />
                            <span>
                                <i className="material-icons">star_rate</i>
                                <i className="material-icons">star_rate</i> 
                                <i className="material-icons">star_rate</i>
                            </span>
                        </label>

                        <label for="">
                            <input type="checkbox" name="" value="" />
                            <span>
                                <i className="material-icons">star_rate</i>
                                <i className="material-icons">star_rate</i> 
                            </span>
                        </label> 

                        <label for="">
                            <input type="checkbox" name="" value="" />
                            <span>
                                <i className="material-icons">star_rate</i>
                            </span>
                        </label> 
                                           
                    </div>

                </div>

            </div>
        );
    }
}

export default HotelFilter;