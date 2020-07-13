import React, { useState } from "react";
import { withGetScreen } from 'react-getscreen';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const ProductShoppingCart = (props) => {

    const product = props.product;
    const { t } = useTranslation();

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
                        <Link className="col s6" onClick={() => props.onAdd(product)}>{t('shared.remove')}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductShoppingCart;