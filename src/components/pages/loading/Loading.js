import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import Spinner from 'react-bootstrap/Spinner';
import './Loading.css';

const Loading = props => {
    const loadingClass = "auth-spinner-container " + (props.location === '/wallpaper' ? 'loading-blank' : 'loading-gray');
    return (
        <>
            <div className={loadingClass}>
                <Spinner className="auth-spinner" animation="grow" variant="info" />
                <Spinner className="auth-spinner" animation="grow" variant="info" />
                <Spinner className="auth-spinner" animation="grow" variant="info" />
            </div>
        </>
    )
}

export default Loading
