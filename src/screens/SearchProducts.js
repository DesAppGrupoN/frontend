import React, { useState, useEffect } from "react";
import ListProductSearch from '../components/ListProductSearch';
import { searchProductsByCommerceId } from '../services/Product';
import { addProductToShoppingCart } from '../services/ShoppingCart';
import { showSuccessfullySnackbar, showFailedSnackbar } from '../components/SnackBar';
import { withRouter, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useAuth0 } from "@auth0/auth0-react";

const SearchProduct = (props) => {

    const [products, setProducts] = useState([]);
    var commerce;
    const [commerceName, setCommerceName] = useState();
    const location = useLocation();
    const { t } = useTranslation();
    const { user } = useAuth0();

    useEffect(() => {
        commerce = location.commerce;
        setCommerceName(location.commerce.name)
        loadProducts();
    }, []);

    function loadProducts() {
        searchProductsByCommerceId(commerce.id).then(res => setProducts(res.data));
    }

    function addToShoppingCart(product) {
        const body = {
            "idProduct": product.id,
            "userEmail": user.email
        }

        addProductToShoppingCart(body)
            .then(() => showSuccessfullySnackbar(t('snackbar.added_product')))
            .catch(() => showFailedSnackbar(t('snackbar.failed_add_product')));
    }

    return (
        <div className="row back">
            <h5 className="center">{commerceName}</h5> 
            <div className="divider"></div>

            <ListProductSearch products={products} onAdd={addToShoppingCart} />

        </div>
    )
}

export default withRouter(SearchProduct);