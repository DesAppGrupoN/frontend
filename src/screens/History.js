import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserPurchaseHistory } from '../services/User';
import HistoryCardComponent from "../components/HistoryCardComponent";

const History = (props) => {

    const [history, setHistory] = useState([]);
    const { user } = useAuth0();

    useEffect(() => {
        getUserPurchaseHistory(user.email).then(res => setHistory(res.data)).catch(res => console.log(res));
    }, [])

    return(
        <div className="container">
            {history.map(order => <HistoryCardComponent purchaseOrder={order} /> )}
        </div>
    );

}

export default History;