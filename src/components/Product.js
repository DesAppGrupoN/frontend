import React from "react";
import { withGetScreen } from 'react-getscreen';
import { Link } from "react-router-dom";

const Product = (props) => {

    const product = props.product;
    const className = props.isMobile() ? "row col s12" : "row col s10 offset-l1";
    return (
        <div className={className}>
            <div className="card horizontal">
                <div className="card-image">
                    <img src={product.image} style={{  "height": "200px", "width": "200px"}} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <h5 className="col s12 m4 l10">{product.name}</h5>
                        <h5 className="col s12 m4 l2">${product.price}</h5>
                        <h6 className="col s12">{product.name}</h6>
                        <p className="col s12">{product.brand}</p>
                    </div>
                    <div className="card-action">
                        <Link onClick={() => props.onEdit(product)}>Editar</Link>
                        <Link onClick={() => props.onDelete(product)}>Eliminar</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withGetScreen(Product);