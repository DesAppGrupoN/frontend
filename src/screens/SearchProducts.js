import React, { useState, useEffect } from "react";
import ListProductSearch from '../components/ListProductSearch';
import { addProduct, deleteProduct, getProductsByCommerceId } from '../services/Product';
import { Link, withRouter, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const SearchProduct = (props) => {

    const [products, setProducts] = useState([]);
    const location = useLocation();
    const commerce = location.commerce;
    const { t } = useTranslation();

    function loadProducts() {
        getProductsByCommerceId(commerce.id).then(res => setProducts(res.data));
    }

    function addToShoppingCart(product) {
        
    }

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <div className="row back">
            <h5 className="center">{commerce.name}</h5>
            <div className="divider"></div>

            <ListProductSearch products={products} onAdd={addToShoppingCart} />

        </div>
    )
}

export default withRouter(SearchProduct);