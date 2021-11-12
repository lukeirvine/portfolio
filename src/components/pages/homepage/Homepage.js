import React from 'react';
import NavBar from './../../nav-bar/NavBar';
import './Homepage.css'

const Homepage = () => {
    return (
        <>
            <NavBar />
            <div className="homepage-page">
                <img className="homepage-hero-img" alt="" src="https://i.imgur.com/9hZQkUs.jpg" />
                <div className="homepage-content">
                    <div className="homepage-avatar-wrapper">
                        <img
                            className="homepage-avatar"
                            alt="avatar"
                            src="https://i.imgur.com/3EAWXp9.jpg"
                        />
                    </div>
                    <h1 className="page-title">Luke Irvine</h1>
                    <div className="homepage-identity">
                        <h2 className="homepage-identity-item">Full-stack Developer, </h2>
                        <h2 className="homepage-identity-item">Musician, </h2>
                        <h2 className="homepage-identity-item">Outdoor Adventurer</h2>
                    </div>
                    <p className="homepage-tagline">
                        I love solving people's problems and making their lives easier 
                        with engaging MicroSaaS web apps, mostly using React.js and Firebase.
                    </p>
                    <div className="homepage-link-container">
                        <button className="homepage-link-btn">
                            <i className='bi-tools' />
                            <span className="homepage-link-btn-text">Apps</span>
                        </button>
                        <button className="homepage-link-btn">
                            <i className='bi-github' />
                            <span className="homepage-link-btn-text">Code</span>
                        </button>
                        {/* <button className="homepage-link-btn">
                            <i className='bi-youtube' />
                            <span className="homepage-link-btn-text">Music</span>
                        </button> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage;