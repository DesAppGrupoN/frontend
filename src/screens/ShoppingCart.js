import React, { useState, useEffect } from "react";
import { getShoppingCart, removeProductFromShoppingCart } from '../services/ShoppingCart';
import { showFailedSnackbar } from '../components/SnackBar';
import ProductShoppingCart from '../components/ProductShoppingCart';
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const ShoppingCart = (props) => {

    const [total, setTotal] = useState(0);
    const [list, setList] = useState([]);
    const { t } = useTranslation();
    const { user } = useAuth0();

    useEffect(() => {
        loadShoppingCart();
    }, []);

    function loadShoppingCart() {
        getShoppingCart(user.email)
            .then(res => {
                setTotal(res.data.totalPrice);
                setList(res.data.cart);
            })
            .catch(() => showFailedSnackbar(t('snackbar.general_error')));
    }

    function removeProduct(product) {
        const body = {
            "idProduct": product.id,
            "userEmail": user.email
        }
        removeProductFromShoppingCart(body).then(() => loadShoppingCart())
    }

    return(
        <div className="container">
            <h5 className="center">{t('shared.total')}: {total}</h5>
            {list.map((elem) => <ProductShoppingCart product={elem.product} onRemove={removeProduct} />)}
            <div className="center">
                    <Link className="back waves-effect waves-light btn-large" onClick={() => console.log("asd")}>{t('purchase.confirm')}</Link>
            </div>
        </div>
    );
}

export default ShoppingCart;