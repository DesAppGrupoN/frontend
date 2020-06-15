import React from "react";
import '../styles/Home.css';
import SearchBar from '../components/SearchBar';

   
const Home = (props) => {
    return (
        <div className="container">      
            <p className="title">¿Que querés comer hoy?</p>
            <SearchBar/>
            </div>
    

    );
}

export default Home;