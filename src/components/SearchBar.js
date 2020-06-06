import React from "react";
import '../styles/SearchBar.css';

const SearchBar = (props) => {

    return (
        <div className="search_container">
                <div className="finder">
                    <div className="finder__outer">
                        <div className="finder__inner">
                            <input className="finder__input" type="text" placeholder="Escribe tu busqueda" />
                        </div>
                    </div>
                </div>
                <button className="primary-button-filled">Buscar</button>
        </div>
    )
}

export default SearchBar;