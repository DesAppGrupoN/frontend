import React, { useState, useEffect } from "react";
import { withGetScreen } from 'react-getscreen';
import Product from "./Product";
import ProductSearch from "./ProductSearch";

const ListProductsSearch = (props) => {
    const [list, setList] = useState([]);
    const cols = props.isMobile() ? 12 : 6; 


    useEffect(() => {
        setList(props.products)
    });

    return (
        <div>
            {list.map(product => {
                return (
                    <div className={"col s" + cols}>
                        <ProductSearch onEdit={props.onEdit} onDelete={props.onDelete} key={product.id} product={product}/>
                    </div>
                );
            })}
        </div>
    )
}

export default withGetScreen(ListProductsSearch);