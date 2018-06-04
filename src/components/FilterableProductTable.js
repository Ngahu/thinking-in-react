import React, { Component } from 'react';


// THIS IS THE PARENT COMPONENT

import SearchBar from './SearchBar';

import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.products)

    }

    render() {
        return (
            <div className="App">
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
        );
    }
}



export default FilterableProductTable;