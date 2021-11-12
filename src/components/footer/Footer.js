import React from 'react';
import './Footer.css';

const Footer = props => {
    return(
        <div className={props.className}>
            <div className="container-fluid footer-container">
                <div className="footer-ig-wrapper footer-large-only">
                    <div className="footer-btn-wrapper">
                        <button href="https://github.com/lukeirvine" target="_blank" type="button" className="btn btn-link">
                            <i className="bi-github footer-icon" />
                            <span className="footer-text">
                                View on Github
                            </span>
                        </button>
                    </div>
                </div>
                <div className="footer-text-wrapper">
                    <p className="footer-text">
                        Luke irvine
                    </p>
                </div>
                <div className="footer-text-wrapper footer-large-only">
                    <p className="footer-text">
                        <i className="bi-envelope-fill footer-icon" />
                        <span><a className="footer-email-link" href="mailto: lukeirvinefreelance@gmail.com">lukeirvinefreelance@gmail.com</a></span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
