import React, {Component} from 'react';
import '../styles/components/Loader.scss';
import loaderPath from '../images/loader.svg';

class Loader extends Component {

    render() {
        return (
            <div className={ this.props.visible ? 'Loader visible' : 'Loader' }>
                <img src={loaderPath} alt="Cargando" />
                <p>Cargando resultados de Hoteles...</p>
            </div>
        );
    }
}

export default Loader;