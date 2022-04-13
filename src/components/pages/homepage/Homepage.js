import React from 'react';
import NavBar from './../../nav-bar/NavBar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Homepage.css'

const Homepage = () => {
    return (
        <>
            {/* <NavBar /> */}
            <div className="hp-page">
                <img className="hero-img hp-hero" alt="" src="https://i.imgur.com/9hZQkUs.jpg" />
                <div className="hp-content">
                    <div className="hp-avatar-wrapper">
                        <img
                            className="hp-avatar"
                            alt="avatar"
                            src="https://i.imgur.com/3EAWXp9.jpg"
                        />
                    </div>
                    <h1 className="page-title">Luke Irvine</h1>
                    <div className="hp-identity">
                        <h2 className="hp-identity-item">Full-stack Developer, </h2>
                        <h2 className="hp-identity-item">Musician, </h2>
                        <h2 className="hp-identity-item">Outdoor Adventurer</h2>
                    </div>
                    <p className="hp-tagline">
                        I love solving people's problems and making their lives easier 
                        with engaging MicroSaaS web apps, mostly using React.js and Firebase.
                    </p>
                    <div className="hp-link-container">
                        <Button 
                            variant="light" 
                            className="hp-link-btn"
                            as={ Link }
                            to="/apps"
                        >
                            <i className='bi-tools' />
                            <span className="hp-link-btn-text">Apps</span>
                        </Button>
                        <Button 
                            variant="light" 
                            className="hp-link-btn" 
                            href="https://github.com/lukeirvine" 
                            target="_blank"
                        >
                            <i className='bi-github' />
                            <span className="hp-link-btn-text">Code</span>
                        </Button>
                        <Button 
                            variant="light" 
                            className="hp-link-btn" 
                            href="https://www.linkedin.com/in/luke-irvine-73b136186/" 
                            target="_blank"
                        >
                            <i className='bi-linkedin' />
                            <span className="hp-link-btn-text">Linkedin</span>
                        </Button>
                        <Button 
                            variant="light" 
                            className="hp-link-btn" 
                            href="https://www.upwork.com/freelancers/~0188a15de9cd140909?viewMode=1" 
                            target="_blank"
                        >
                            <i className='bi-code-slash' />
                            <span className="hp-link-btn-text">Upwork</span>
                        </Button>
                        <Button 
                            variant="light" 
                            className="hp-link-btn"
                            as={ Link }
                            to="/contact"
                        >
                            <i className='bi-envelope' />
                            <span className="hp-link-btn-text">Contact</span>
                        </Button>
                        {/* <Button variant="light" className="hp-link-btn">
                            <i className='bi-youtube' />
                            <span className="hp-link-btn-text">Music</span>
                        </Button> */}
                    </div>
                </div>
                {/* <Footer className="hp-footer" /> */}
            </div>
        </>
    )
}

export default Homepage;