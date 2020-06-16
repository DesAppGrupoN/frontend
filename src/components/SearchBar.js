import React from "react";
import { useTranslation } from 'react-i18next';
import '../styles/SearchBar.css';

const SearchBar = (props) => {
    
    const { t } = useTranslation();

    return (
        <div className="search_container">
                <div className="finder">
                    <div className="finder__outer">
                        <div className="finder__inner">
                            <input className="finder__input" type="text" placeholder={t("searchbar.placeholder")} />
                        </div>
                    </div>
                </div>
                <button className="primary-button-filled">{t("searchbar.search")}</button>
        </div>
    )
}

export default SearchBar;