import React, {Component} from 'react';
import '../styles/components/HotelsResultList.scss';
//
import HotelsResultListItem from './HotelsResultListItem';

class HotelsResultList extends Component {
    render() {
        const collection = this.props.hotels;

        return (
            <ul className="HotelsResultList">
            { 
                collection.map((hotel) => {
                    return <HotelsResultListItem key={hotel.id} hotel={hotel} />;
                }) 
            }
            </ul>
        );
    }
}


export default HotelsResultList;