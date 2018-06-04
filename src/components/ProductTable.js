import React, { Component } from 'react';

import ProductCategoryRow from './ProductCategoryRow';

import ProductRow from './ProductRow';

class ProductTable extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props.products)

    }

    render() {

        const rows = [];
        
        let lastCategory = null;

        this.props.products.forEach((product) =>{
            if(product.category !== lastCategory){
                rows.push(
                    <ProductCategoryRow 
                        category={product.category}
                        key={product.category} />
                );
            }
            rows.push(
                <ProductRow
                    product={product}
                    key={product.name} />
            );
            
            lastCategory = product.category;
        })
        return (
        <table className="App">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
      </table>
        );
    }
}



export default ProductTable;