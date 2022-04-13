import React from 'react';
import NavBar from '../../nav-bar/NavBar';
import Footer from '../../footer/Footer';
import './Contact.css';
import { imgs } from './../../../resources/images';

const Contact = () => {

    return (
        <>
            <NavBar />
            <div className="ct-page">
                <img className="ct-hero-img" src={imgs.scenery.baker} alt="" />
                <div className="ct-avatar-container">
                    <div className="ct-avatar-wrapper">
                        <img className="ct-avatar" src={imgs.profile.haystack} alt="profile photo" />
                    </div>
                </div>
                <div className="ct-content-wrapper">
                    <div className="ct-content">
                        <h1 className="ct-title">
                            <i className="bi-envelope" /> Contact
                        </h1>
                        <p className="ct-subtitle">
                            Need help with a project or some freelance programming? I'd love to hear from you!
                        </p>
                        <p className="ct-email">
                            Shoot me an email at <a className="ct-link" href="mailto:lukeirvinemusic@gmail.com">lukeirvinefreelance@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer className='c-footer' />
        </>
    )
}

export default Contact;