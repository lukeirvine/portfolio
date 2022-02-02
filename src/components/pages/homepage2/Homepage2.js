import React from 'react';
import NavBar from './../../nav-bar/NavBar';
import Background from './components/Background';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Homepage2.css'

const Homepage = () => {
    return (
        <>
            <Background />
            <div className="hp2-page">
                <div className="hp2-content">
                    <div className="hp2-avatar-wrapper">
                        <img
                            className="hp2-avatar"
                            alt="avatar"
                            src="https://i.imgur.com/3EAWXp9.jpg"
                        />
                    </div>
                    <h1 className="page-title">Luke Irvine</h1>
                    <div className="hp2-identity">
                        <h2 className="hp2-identity-item">Full-stack Developer, </h2>
                        <h2 className="hp2-identity-item">Musician, </h2>
                        <h2 className="hp2-identity-item">Outdoor Adventurer</h2>
                    </div>
                    <p className="hp2-tagline">
                        I solve people's problems and make their lives easier 
                        with engaging MicroSaaS web apps, mostly using React.js and Firebase.
                    </p>
                    <div className="hp2-link-container">
                        <Button 
                            variant="light" 
                            className="hp2-link-btn"
                            as={ Link }
                            to="/apps"
                        >
                            <i className='bi-tools' />
                            <span className="hp2-link-btn-text">Apps</span>
                        </Button>
                        {/* <Button 
                            variant="light" 
                            className="hp2-link-btn" 
                            href="https://github.com/lukeirvine" 
                            target="_blank"
                        >
                            <i className='bi-github' />
                            <span className="hp2-link-btn-text">Code</span>
                        </Button> */}
                        <Button 
                            variant="light" 
                            className="hp2-link-btn" 
                            href="https://www.linkedin.com/in/luke-irvine-73b136186/" 
                            target="_blank"
                        >
                            <i className='bi-linkedin' />
                            <span className="hp2-link-btn-text">Linkedin</span>
                        </Button>
                        <Button 
                            variant="light" 
                            className="hp2-link-btn"
                            href="/music"
                        >
                            <i className='bi-music-note-beamed' />
                            <span className="hp2-link-btn-text">Music</span>
                        </Button>
                        <Button 
                            variant="light" 
                            className="hp2-link-btn"
                            href="/music"
                        >
                            <i className='bi-chat-dots' />
                            <span className="hp2-link-btn-text">Contact</span>
                        </Button>
                    </div>
                </div>
                {/* <Footer className="hp2-footer" /> */}
            </div>
        </>
    )
}

export default Homepage;