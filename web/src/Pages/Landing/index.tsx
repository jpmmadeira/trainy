import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import blueHeartIcon from '../../assets/images/icons/blue-heart.svg';

import api from '../../services/api';

import './styles.css';

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('/connections').then(response => {
            const { total } = response.data;

            setTotalConnections(total);
        })
    }, [])

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Trainy" />
                    <h2>Personal trainers platform</h2>
                </div>

                <img
                    src={landingImg}
                    alt="Study Platform"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/trainers" className="trainers">
                        <img src={studyIcon} alt="Trainers" />
                        Find a trainer
                    </Link>

                    <Link to="/be-a-trainer" className="be-a-trainer">
                        <img src={giveClassesIcon} alt="Be a trainer" />
                        Be a trainer
                    </Link>
                </div>

                <span className="total-connections">
                    Total of {totalConnections} connections made on our platform <img src={blueHeartIcon} alt="Blue Heart" />
                </span>
            </div>
        </div>
    )
}

export default Landing;