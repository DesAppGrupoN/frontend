import React from "react";
import { withGetScreen } from 'react-getscreen';
import { Link } from "react-router-dom";

const Commerce = (props) => {
    const commerce = props.commerce;
    const className = props.isMobile() ? "row col s12" : "row col s10 offset-l1";
    return (
        <div className={className}>
            <div className="card horizontal">
                <div className="card-image">
                    <img src={commerce.image} style={{ "height": "200px", "width": "200px" }} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <h5 className="col s12 m4 l10">{commerce.name}</h5>
                        <h5 className="col s12 m4 l10">${commerce.sector}</h5>
                        <h5 className="col s12 m4 l10">${commerce.address}</h5>
                    </div>
                    <div className="card-action">
                        <Link onClick={() => props.onEdit(commerce)}>Editar</Link>
                        <Link onClick={() => props.onDelete(commerce)}>Eliminar</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withGetScreen(Commerce);