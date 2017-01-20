import React, { Component } from 'react';
// styles
import '../styles/components/Appbar.scss';
// assets
import brandIcon from '../images/logo-almundo.svg';

class Appbar extends Component {

    render() {
        return (
            <header className="appbar">
                <a href="#" className="appbar_icon" title="almundo.com">
                    <img src={brandIcon} alt="almundo.com" />
                </a>



                <i className="material-icons md-light">person</i>

                <i className="material-icons md-light">phone</i>


            </header>
        );
    }

}

export default Appbar;