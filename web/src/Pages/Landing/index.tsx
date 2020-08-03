import React from 'react';

import logoImg from '../../assets/logo.svg';
import landingImg from '../../assets/landing.svg';

import studyIcon from '../../assets/icons/study.svg';
import giveClassesIcon from '../../assets/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/icons/purple-heart.svg';

import './styles.css';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Your online study platform</h2>
                </div>

                <img
                    src={landingImg}
                    alt="Study Platform"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <a href="" className="study">
                        <img src={studyIcon} alt="Study" />
                            Study
                    </a>

                    <a href="" className="give-classes">
                        <img src={giveClassesIcon} alt="Study" />
                        Give Classes
                    </a>
                </div>

                <span className="total-connections">
                    Total of 200 connections made on our platform <img src={purpleHeartIcon} alt="Purple Heart" />
                </span>
            </div>
        </div>
    )
}

export default Landing;