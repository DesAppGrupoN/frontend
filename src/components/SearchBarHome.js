import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import '../styles/SearchBar.css';
import { Link } from "react-router-dom";

const SearchBarHome = (props) => {
    
    const { t } = useTranslation();
    const [search, setSearch] = useState();

    return (
        <div className="search_container">
                <div className="finder">
                    <div className="finder__outer">
                        <div className="finder__inner">
                            <input className="finder__input" type="text" onChange={(e) => setSearch(e.target.value)} placeholder={t("searchbar.placeholder")} />
                        </div>
                    </div>
                </div>
                <Link to={{pathname: '/search', search: search}} className="primary-button-filled">{t("searchbar.search")}</Link>
        </div>
    )
}

export default SearchBarHome;