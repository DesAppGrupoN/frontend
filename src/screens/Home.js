import React from "react";
import '../styles/Home.css';
import { useTranslation } from 'react-i18next';
import SearchBarHome from '../components/SearchBarHome';


const Home = (props) => {

    const { t } = useTranslation();
    
    return (
        <div className="homeContainer valign-wrapper">
            <div className="container valign">
                <div className="row">
                    <div className="col l12">
                        <h2 className="center-align">{t('home.title')}</h2>
                        <SearchBarHome />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;