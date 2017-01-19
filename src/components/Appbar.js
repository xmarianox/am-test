import React, { Component } from 'react';
// styles
import '../styles/components/Appbar.scss';
// assets
import brandIcon from '../images/logo-almundo.svg';

class Appbar extends Component {

    render() {
        return (
            <header className="Appbar">
                <img src={brandIcon} alt="almundo.com" />
            </header>
        );
    }

}

export default Appbar;