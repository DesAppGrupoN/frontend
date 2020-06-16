import React from "react";
import '../styles/Home.css';
import { useTranslation } from 'react-i18next';
import SearchBar from '../components/SearchBar';


const Home = (props) => {

    const { t } = useTranslation();

    return (
        <div class="homeContainer valign-wrapper">
            <div class="container valign">
                <div class="row">
                    <div class="col l12">
                        <h2 className="center-align">{t('home.title')}</h2>
                        <SearchBar />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;