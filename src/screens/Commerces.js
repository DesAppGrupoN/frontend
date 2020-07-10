import React, { useState, useEffect } from "react";
import ListCommerces from '../components/ListCommerces';
import { addCommerce, deleteCommerce } from '../services/Commerce';
import { getUserCommerces } from '../services/User';
import { Link, withRouter, useHistory } from "react-router-dom";
import NewOrEditCommerce from "../components/NewOrEditCommerce";
import { useTranslation } from 'react-i18next';
import { useAuth0 } from "@auth0/auth0-react";

const Commerces = (props) => {

    const [showAdd, setShowAdd] = useState(false);
    const [commerces, setCommerces] = useState([]);
    const [selectedCommerce, setSelectedCommerce] = useState(null);
    const history = useHistory();
    const { t } = useTranslation();
    const { user } = useAuth0();

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
            "id": id,
            "userEmail": user.email
        }

        console.log("BODY: ", body);
        
        addCommerce(body).then(() => toggleShowAdd()).then(() => loadCommerces());
    }

    function toggleShowAdd() {
        setShowAdd(!showAdd);
    }

    function deleteCom(commerce) {
        const body = {
            "id": commerce.id,
            "userEmail": user.email
        }
        deleteCommerce(body).then(() => loadCommerces());
    }

    function edit(commerce) {
        setSelectedCommerce(commerce);
        toggleShowAdd();
    }

    function loadCommerces() {
        getUserCommerces(user.email).then(res => setCommerces(res.data));
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