import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';


const HistoryCardComponent = (props) => {

    const order = props.purchaseOrder;
    const { t } = useTranslation();    
    return(
        <div className="container">
            {console.log("ORDER: ", order)}
            <div class="row">
                <div class="col s12">
                <div class="card">
                    <div class="card-content">
                        <span class="card-title col s8 m3">{order.commerceName}</span>
                        <span class="card-title right-align">{t("formattedDate", { date: new Date(order.date) })}</span>

                        <div className="divider" />
                        <br />

                        {order.products.map(p => 
                            <div className="row">
                                <p className="left">{"-" + p.quantity + " x " + p.name}</p>
                                <p className="right">{t('currency.money', { num: p.total })}</p>
                            </div>
                        )}
                    </div>
                    <div className="card-action right-align">
                        <p class="col s1 m1">Total</p>
                        <p>{t('currency.money', { num: order.total })}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );

}

export default HistoryCardComponent;