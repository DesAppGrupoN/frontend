import React, { useEffect } from "react";
import '../styles/Home.css';
import { useTranslation } from 'react-i18next';
import SearchBarHome from '../components/SearchBarHome';
import { userLoggedIn } from '../services/User';
import { useAuth0 } from "@auth0/auth0-react";


const Home = (props) => {

    const { t } = useTranslation();
    const { user } = useAuth0();

    useEffect(() => {
        userLoggedIn(user);
    }, [])
    
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