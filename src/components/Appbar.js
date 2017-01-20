import React, { Component } from 'react';
// styles
import '../styles/components/Appbar.scss';
// assets
import brandIcon from '../images/logo-almundo.svg';

class Appbar extends Component {
    constructor() {
        super();

        this.state = {
            menu_open: false,
            munu_items: [
                { id: 1, label: 'Hoteles', route: '#' },
                { id: 2, label: 'Vuelos', route: '#' },
                { id: 3, label: 'Vuelo + Hotel', route: '#' },
                { id: 4, label: 'Paquetes', route: '#' },
                { id: 5, label: 'Disney', route: '#' },
                { id: 6, label: 'Escapadas', route: '#' },
                { id: 7, label: 'Seguros', route: '#' },
                { id: 8, label: 'Autos', route: '#' },
                { id: 9, label: 'Cruceros', route: '#' },
                { id: 10, label: 'OFERTAS', route: '#' },
                { id: 11, label: 'Trenes', route: '#' },
                { id: 12, label: 'Actividades', route: '#' },
                { id: 13, label: 'Sucursales', route: '#' },
                { id: 14, label: 'Club Almundo', route: '#' },
                { id: 15, label: 'Ayuda', route: '#' }
            ]
        };
    }

    _toggleMenu() {
        this.setState({ menu_open: !this.state.menu_open });
    }

    render() {
        return (
            <header className="appbar">
                <div>
                    <a href="#" className="appbar_icon" title="almundo.com">
                        <img src={brandIcon} alt="almundo.com" />
                    </a>

                    <div>
                        <ul>
                            <li>
                                <a href="#" title="Ingresar"><i className="material-icons">person</i></a>
                            </li>
                            <li>
                                <a href="#" title="Llamanos"><i className="material-icons">phone</i></a>
                            </li>
                            <li>
                                <button 
                                    onClick={this._toggleMenu.bind(this)} 
                                    className={ this.state.menu_open ? 'btn-hamburger active' : 'btn-hamburger' } 
                                    type="button" role="button"
                                >
                                    <span className="lines"></span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>{/* blue container */}

                <div>
                    <ul>
                        {
                            this.state.munu_items.map((item) => {
                                return <li key={item.id}><a href={item.route} title={item.label}>{item.label}</a></li>;
                            })
                        }
                    </ul>
                </div>{/* menu container */}
            </header>
        );
    }

}

export default Appbar;