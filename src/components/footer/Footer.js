import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

    clickInstagram = () => {
        window.location = 'https://www.instagram.com/wwusmallgroups/';
    }

    render() {
        return(
            <div>
                <div className="container-fluid footer-container">
                    <div className="footer-ig-wrapper footer-large-only">
                        <div className="footer-btn-wrapper">
                            <button onClick={this.clickInstagram} type="button" className="btn btn-link">
                                <i className="bi-instagram" />
                                <span className="footer-text">
                                    Visit us on Instagram
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="footer-text-wrapper">
                        <p className="footer-text">
                            WWU Small Groups
                        </p>
                    </div>
                    <div className="footer-text-wrapper footer-large-only">
                        <p className="footer-text">
                            <a className="footer-email-link" href="mailto: small.groups@wallawalla.edu">small.groups@wallawalla.edu</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
