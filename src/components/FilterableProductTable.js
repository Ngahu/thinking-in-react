import React, { Component } from 'react';


// THIS IS THE PARENT COMPONENT

import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.products)

    }

    render() {
        return (
            <div>
                <SearchBar />

            </div>
        );
    }
}



export default FilterableProductTable;