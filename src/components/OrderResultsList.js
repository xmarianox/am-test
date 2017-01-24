import React, {Component} from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import '../styles/components/OrderResultsList.scss';

class OrderResultsList extends Component {
    render() {
        return (
            <div className="OrderResultsList">
                <p>Ordernar</p>

                <Select 
                    name="order-results"
                    clearable={false}
                    searchable={false}
                    value={this.props.value}
                    options={this.props.options}
                    onChange={this.props.onChangeOrder}
                />
            </div>
        );
    }
}

export default OrderResultsList;