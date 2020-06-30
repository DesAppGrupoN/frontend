import React, { useState, useEffect } from "react";
import '../styles/Home.css';
import { useTranslation } from 'react-i18next';
import SearchBar from '../components/SearchBar';
import { searchCommerce } from '../services/Commerce';
import {Link, withRouter, useLocation} from "react-router-dom";
import ListCommercesSearch from "../components/ListCommercesSearch";

const Search = (props) => {
    
    const { t } = useTranslation();
    const location = useLocation();
    const [searchFor, setSearchFor] = useState(location.search.substr(1));
    const [result, setResult] = useState([]);
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState();
    const elemPerPage = 10;

    function handlePageChange() {
        setOffset(currentPage * elemPerPage);
    } 

    function update() {
        searchCommerce(searchFor)
        .then(res => {
            setResult(res.data.slice(offset, offset + elemPerPage));
            setTotalPages(Math.ceil(res.data.length / elemPerPage));
            window.scrollTo(0, 0);
        });
    }

    function changeSearch(input) {
        setSearchFor(input);
    }

    useEffect(() => { 
        update(searchFor);
    }, [searchFor, offset]);

    useEffect(() => {
        handlePageChange();
    }, [currentPage]);


    return (
        <div className="container">
            <SearchBar onSubmit={changeSearch}/>
            <h5 className="center">{t('searchbar.results')}: {searchFor}</h5>
            <div className="divider"></div>
            <ListCommercesSearch commerces={result}/>

            <ul class="pagination center">
                <li class={currentPage > 0 ? "waves-effect" : "disabled"}><a onClick={() => setCurrentPage(currentPage - 1)}><i class="material-icons">chevron_left</i></a></li>
                {Array(totalPages).fill().map((_, i) => { 
                    return <li class={currentPage == i ? "active" : "waves-effect"}><a onClick={() => setCurrentPage(i)}>{i + 1}</a></li>
                })}
                <li class={currentPage < totalPages - 1 ? "waves-effect" : "disabled"}><a onClick={() => setCurrentPage(currentPage + 1)}><i class="material-icons">chevron_right</i></a></li>
            </ul>

        </div>
     );
}

export default withRouter(Search);