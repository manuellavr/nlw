import React from 'react';
import '../styles/pages/landing.css';

import logo from '../imgs/Logo.svg';
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom';
 

function Landing(){
    return (
        <div className="page-landing">
            <div className="content-wrapper">
                <img src={logo} alt="Happy" />
                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>
    
                <div className="location">
                    <strong>Salvador</strong>
                    <strong>Bahia</strong>
                </div>
            <Link to="/app" className="enterapp">
                <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
            </Link>
            </div>
        </div>
      );
}

export default Landing