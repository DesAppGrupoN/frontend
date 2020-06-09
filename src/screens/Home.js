import React from "react";
import '../styles/Home.css';
import SearchBar from '../components/SearchBar';
import Commerces from "../components/Commerces";
import { getAllCommerce } from "../services/Commerce";
   
const Home = (props) => {
    return (
        <div className="homeContainer">      
            <p className="title">¿Que querés comer hoy?</p>
            <SearchBar/>
            <Commerces  commerces= {getAllCommerce}   />    
            </div>
    

    );
}

export default Home;