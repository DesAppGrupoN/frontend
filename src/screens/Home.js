import React from "react";
import '../styles/Home.css';
import SearchBar from '../components/SearchBar';


const Home = (props) => {
    return (
        <div class="homeContainer valign-wrapper">
            <div class="container valign">
                <div class="row">
                    <div class="col l12">
                        <h2 className="center-align">¿Que querés comer hoy?</h2>
                        <SearchBar />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;