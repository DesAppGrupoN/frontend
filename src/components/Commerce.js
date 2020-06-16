import React from "react";
import { withGetScreen } from 'react-getscreen';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Commerce = (props) => {

    const commerce = props.commerce;
    const className = props.isMobile() ? "row col s12" : "row col s10 offset-l1";
    const { t } = useTranslation();

    return (
        <div className={className} >
            <div className="card horizontal" style={{ "height": "300px", "width": "auto" }}>
                <div className="card-image">
                    <img src={commerce.image} style={{ "height": "100%", "width": "220px", }} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <h5 className="col s12 m4 l10">{commerce.name}</h5>
                        <p className="col s12 m4 l2">{commerce.sector}</p>
                        <h6 className="col s12">{commerce.description}</h6>
                        <h6 className="col s12">{commerce.address}</h6>
                    </div>
                    <div className="card-action">
                        <Link to={{pathname: "/products", commerce_id: commerce.id}}>{t('shared.show_prod')}</Link>
                        <Link onClick={() => props.onEdit(commerce)}>{t('shared.edit')}</Link>
                        <Link onClick={() => props.onDelete(commerce)}>{t('shared.delete')}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withGetScreen(Commerce);