import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const SearchBar = (props) => {
    
    const { t } = useTranslation();
    const [search, setSearch] = useState();

    return (
        <div className="row">
        <div className="col s12">
          <div className="row valign-wrapper">

            <div className="input-field col s12">
              <i className="material-icons prefix">search</i>
              <input type="text" id="input" onChange={(e) => setSearch(e.target.value)}/>
              <label for="input">{t("searchbar.placeholder")}</label>
            </div>

            <button className="btn waves-effect waves-light #ff8a80 red lighten-1" onClick={() => props.onSubmit(search)}>
                {t("searchbar.search")}
                <i className="material-icons right">send</i>
            </button>

          </div>
        </div>
      </div>
    )
}

export default SearchBar;