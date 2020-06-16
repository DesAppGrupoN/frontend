import React from "react";
import { withGetScreen } from 'react-getscreen';
import { Link } from "react-router-dom";

const Commerce = (props) => {
    const commerce = props.commerce;
    const className = props.isMobile() ? "row col s12" : "row col s10 offset-l1";
    return (
        <div className={className} >
            <div className="card horizontal" style={{ "height": "350px", "width": "auto" }}>
                <div className="card-image">
                    <img src={commerce.image} style={{ "height": "200px", "width": "auto" }} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <h5 className="col s12 m4 l9">{commerce.name}</h5>
                        <p className="col s12 m4 l3 ">{commerce.sector}</p>
                        <h6 className="col s12">{commerce.description}</h6>
                        <h6 className="col s12">{commerce.address}</h6>
                    </div>
                    <div className="card-action">
                        <Link to={{pathname: "/products", commerce_id: commerce.id}}>Ver productos</Link>
                        <Link onClick={() => props.onEdit(commerce)}>Editar</Link>
                        <Link onClick={() => props.onDelete(commerce)}>Eliminar</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withGetScreen(Commerce);