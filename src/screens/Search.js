import React, { useState, useEffect } from "react";
import '../styles/Home.css';
import { useTranslation } from 'react-i18next';
import SearchBar from '../components/SearchBar';
import { searchCommerce } from '../services/Commerce';
import {Link, withRouter, useLocation} from "react-router-dom";
import ListCommercesSearch from "../components/ListCommercesSearch";

const Search = (props) => {
    
    const location = useLocation();
    const [searchFor, setSearchFor] = useState(location.search.substr(1));
    const [result, setResult] = useState([]);

    function update(input) {
        setSearchFor(input);
        searchCommerce(input).then(res => setResult(res.data));
    }

    useEffect(() => { 
        update(searchFor);
    }, []);


    return (
        <div className="container">
            <SearchBar onSubmit={update}/>
            <h5 className="center">Mostrando resultados de: {searchFor}</h5>
            <div className="divider"></div>
            <ListCommercesSearch commerces={result}/>
        </div>
     );
}

export default withRouter(Search);