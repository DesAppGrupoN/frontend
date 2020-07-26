import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import M from 'materialize-css/dist/js/materialize.min.js';
import { useTranslation } from 'react-i18next';
import { useAuth0 } from "@auth0/auth0-react";
import { getAvailablePaymethods, getCommercesInShoppingCart, confirmPurchase } from '../services/ShoppingCart';
import CommercePurchase from "./CommercePurchase";
import { showSuccessfullySnackbar, showFailedSnackbar } from '../components/SnackBar';

const PurchaseComponent = (props) => {
    
    const { user } = useAuth0();
    const { t } = useTranslation();
    const [commerces, setCommerces] = useState([]);
    const [turns, setTurns] = useState([]);
    const [selectedPayMethod, setSelectedPayMethod] = useState("");
    const [payMethods, setPayMethods] = useState([]);

    useEffect(() => {
        getAvailablePaymethods(user.email).then(res => { setPayMethods(res.data); setSelectedPayMethod(res.data[0])}).then(() => M.AutoInit());
        getCommercesInShoppingCart(user.email).then(res => setCommerces(res.data));

    }, []);

    function submitPurchase() {
        const body = {
            "userEmail": user.email,
            "payMethod": selectedPayMethod,
            "turns": turns
        }

        confirmPurchase(body).then(() => showSuccessfullySnackbar(t('purchase.completed'))).then(() => props.update()).catch(() => showFailedSnackbar(t('purchase.failed')));
        props.onClose();
    }

    return (
        <div className="popup">
            <div class="row">
                <form class="col s6 offset-s3 #f5f5f5 grey lighten-4 center">
                    <h5> {t('purchase.title_confirm')} </h5>
                    <div className="divider" />
                    <p>{" "}</p>
                    
                    <label className="left">{t('purchase.paymethods')}</label>
                    <div>
                        <select class="#f5f5f5 grey lighten-4" onChange={(event) => setSelectedPayMethod(event.target.value)}>
                            {payMethods.map(sect => <option value={sect}>{t(`paymethods.${sect}`)}</option> ) }
                        </select>
                    </div>

                    {commerces.map(commerce => {
                        return <CommercePurchase commerce={commerce} turns={turns} setTurns={setTurns} /> 
                    })}


                    <Link className="back waves-effect waves-light btn-large" onClick={submitPurchase}>{t('purchase.confirm')}</Link>
                    &nbsp; &nbsp; &nbsp;
                    <Link className="back waves-effect waves-light btn-large" onClick={props.onClose}>{t('purchase.cancel')}</Link>
                </form>
            </div>
        </div>
    )
}

export default PurchaseComponent;