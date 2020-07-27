import React, { useState, useEffect } from "react";

const HistoryCardComponent = (props) => {

    const order = props.purchaseOrder;
    
    return(
        <div className="container">
            {console.log("ORDER: ", order)}
            <div class="row">
                <div class="col s12">
                <div class="card">
                    <div class="card-content">
                        <span class="card-title col s8 m3">{order.commerceName}</span>
                        <span class="card-title right-align">{new Date(order.date).toLocaleDateString()}</span>

                        <div className="divider" />
                        <br />

                        {order.products.map(p => 
                            <div className="row">
                                <p className="left">{"-" + p.quantity + " x " + p.name}</p>
                                <p className="right">{"$" + p.total}</p>
                            </div>
                        )}
                    </div>
                    <div className="card-action right-align">
                        <p class="col s1 m1">Total</p>
                        <p>{"$" + order.total}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );

}

export default HistoryCardComponent;