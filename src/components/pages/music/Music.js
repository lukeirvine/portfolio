import React from 'react';
import ComingSoon from '../../coming-soon/ComingSoon';
import NavBar from '../../nav-bar/NavBar';
import './Music.css';

const Music = () => {

    return (
        <>
            <NavBar />
            <div className="m-page">
                <ComingSoon 
                    title={(
                        <>
                            <i className="bi-music-note-list" /> Music
                        </>
                    )}
                    bg='linear-gradient(rgb(118, 0, 165), rgb(68, 0, 95))'
                />
            </div>
        </>
    )
}

export default Music;