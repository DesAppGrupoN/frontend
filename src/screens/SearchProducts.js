import React, { useState, useEffect } from "react";
import ListProductSearch from '../components/ListProductSearch';
import { addProduct, deleteProduct, getProductsByCommerceId } from '../services/Product';
import { showSuccessfullySnackbar, showFailedSnackbar } from '../components/SnackBar';
import { Link, withRouter, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const SearchProduct = (props) => {

    const [products, setProducts] = useState([]);
    var commerce;
    const name = "hola";
    const location = useLocation();
    const { t } = useTranslation();

    useEffect(() => {
        commerce = location.commerce;
        loadProducts();
    }, []);

    function loadProducts() {
        getProductsByCommerceId(commerce.id).then(res => setProducts(res.data));
    }

    function addToShoppingCart(product) {
        showSuccessfullySnackbar(t('snackbar.added_product'));
    }

    return (
        <div className="row back">
            <h5 className="center">{name}</h5> 
            <div className="divider"></div>

            <ListProductSearch products={products} onAdd={addToShoppingCart} />

        </div>
    )
}

export default withRouter(SearchProduct);