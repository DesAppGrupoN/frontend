import React, { useState, useEffect } from "react";
import ListCommerces from '../components/ListCommerces';
import { addCommerce, deleteCommerce, getAllCommerce } from '../services/Commerce';
import { Link, withRouter, useHistory } from "react-router-dom";
import NewOrEditCommerce from "../components/NewOrEditCommerce";
import { useTranslation } from 'react-i18next';

const Commerces = (props) => {

    const [showAdd, setShowAdd] = useState(false);
    const [commerces, setCommerces] = useState([]);
    const [selectedCommerce, setSelectedCommerce] = useState(null);
    const history = useHistory();
    const { t } = useTranslation();

    function submitCommerce(name, description, sector, address, image, payMethods, maxDistance, attentionSchedule, id) {
        const body = {
            "name": name,
            "description": description,
            "sector": sector,
            "address": address,
            "image": image,
            "payMethods": payMethods,
            "maxDistance": maxDistance,
            "attentionSchedule": attentionSchedule,
            "id": id
        }
        
        addCommerce(body).then(() => toggleShowAdd()).then(() => loadCommerces());
    }

    function toggleShowAdd() {
        setShowAdd(!showAdd);
    }

    function deleteCom(commerce) {
        console.log(commerce);
        deleteCommerce(commerce.id).then(() => loadCommerces());
    }

    function edit(commerce) {
        setSelectedCommerce(commerce);
        toggleShowAdd();
    }

    function loadCommerces() {
        getAllCommerce().then(res => setCommerces(res.data));
    }

    useEffect(() => {
        loadCommerces();
    }, []);

    return (
        <div>
            <div className="row back">
                <div className="center back">
                    <Link className="back waves-effect waves-light btn-large" onClick={toggleShowAdd}>{t('commerces.new')}</Link>
                </div>
                <ListCommerces onEdit={edit} onDelete={deleteCom} commerces={commerces} />


            </div>
            {showAdd ?
                <div className="front"> <NewOrEditCommerce commerce={selectedCommerce} onAccept={submitCommerce} onCancel={() => setShowAdd(false)} /> </div>
                :
                <div />
            }
        </div>
    )
}

export default Commerces;