import React from 'react';
import ComingSoon from '../../coming-soon/ComingSoon';
import NavBar from '../../nav-bar/NavBar';
import Footer from '../../footer/Footer';
import './Contact.css';

const Contact = () => {

    return (
        <>
            <NavBar />
            <ComingSoon 
                title={<>
                    <i className="bi-envelope" /> Contact
                </>}
                bg='linear-gradient(rgb(116, 120, 182), rgb(62, 58, 83))'
            />
            <Footer className='c-footer' />
        </>
    )
}

export default Contact;