import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductRow extends Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ?
            product.name:
                <span style={{color:'red'}}>
                {product.name}
                </span>
        return (
        <tr className="App">
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
        );
    }
}

ProductRow.propTypes = {

};

export default ProductRow;