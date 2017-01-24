import React, {Component} from 'react';
import '../styles/components/HotelFilterMobile.scss';


class HotelFilterMobile extends Component {

    render() {
        return (
            <ul className="HotelFilterMobile">
                <li>
                    <span>Modificar búsqueda</span>
                </li>

                <li>
                    <span>Ver hoteles en el mapa</span>
                </li>

                <li>
                    <span>Filtrar</span>
                </li>
            </ul>
        );
    }
}

export default HotelFilterMobile;