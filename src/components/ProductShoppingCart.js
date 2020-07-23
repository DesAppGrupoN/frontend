import React, { useState, useEffect } from "react";
import { withGetScreen } from 'react-getscreen';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useAuth0 } from "@auth0/auth0-react";
import { changeQuantityOfProductFromShoppingCart } from '../services/ShoppingCart';
import { showFailedSnackbar } from '../components/SnackBar';

const ProductShoppingCart = (props) => {

    const [amount, setAmount] = useState(props.element.quantity);
    const product = props.element.product;
    const { t } = useTranslation();
    const { user } = useAuth0();

    function changeAmount(amount) {
        const body = {
            "userEmail": user.email,
            "idProduct": product.id,
            "quantity": amount
        }

        changeQuantityOfProductFromShoppingCart(body)
        .then(() => setAmount(amount))
        .catch(() => showFailedSnackbar(t('snackbar.general_error')));
    }

    return (
        <div className={"row"}>
            <div className="card horizontal">
                <div className="card-image">
                    <img src={product.image} style={{ "height": "200px", "width": "auto" }} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <h5 className="col s12 m4 l9">{product.name}</h5>
                        <h5 className="col s12 m4 l3">${product.price}</h5>
                        <h6 className="col s12">{product.name}</h6>
                        <p className="col s12">{product.brand}</p>
                    </div>
                    <div className="card-action right-align valign-wrapper">
                        <input type="number" min="1" max={product.stock} class="input-field validate left" onChange={(event) => changeAmount(event.target.value)} value={amount} />
                        <Link className="col s6" onClick={() => props.onRemove(product)}>{t('shared.remove')}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductShoppingCart;