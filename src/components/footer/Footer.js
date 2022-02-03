import React from 'react';
import { Button } from 'react-bootstrap';
import './Footer.css';

const Footer = props => {
    return(
        <div className={props.className}>
            <div className="container-fluid footer-container">
                <div className="footer-ig-wrapper footer-large-only">
                    <div className="footer-btn-wrapper">
                        <Button 
                            href="https://github.com/lukeirvine/portfolio" 
                            target="_blank" 
                            className="btn btn-link footer-btn"
                            variant='link'
                        >
                            <i className="bi-github footer-icon" />
                            <span className="footer-text">
                                View on Github
                            </span>
                        </Button>
                    </div>
                </div>
                <div className="footer-text-wrapper">
                    <p className="footer-text">
                        Luke Irvine
                    </p>
                </div>
                <div className="footer-text-wrapper footer-large-only">
                    <p className="footer-text footer-link">
                        <i className="bi-envelope-fill footer-icon" />
                        <a className="footer-link" href="mailto: lukeirvinefreelance@gmail.com">lukeirvinefreelance@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
