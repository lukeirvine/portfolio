import React, { useState, useEffect } from 'react';
import { imgs } from '../../../../resources/images';
import { shuffleArray, getRandomInt } from '../../../../resources/functions';
import './Background.css';

const colors = [
    'yellow', 'red', 'blue', 'green', 'purple', 'orange', 'pink', 'white', 'black', 'gray'
]

let images = [];
Object.values(imgs).forEach(category => {
    Object.values(category).forEach(img => {
        images.push(img);
    })
})
// images = shuffleArray(images);

const Background = () => {
    let flippedObj = {};
    for (let i = 1; i <= 18; i++) {
        flippedObj[i] = false;
    }
    const [flipped, setFlipped] = useState(flippedObj);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped(prev => {
                const i = getRandomInt(1, 18);
                return {...prev, [i]: !prev[i]}
            });
        }, 2000);
        
        return () => {
            clearInterval(interval);
        }
    }, [])

    var items = [];
    for (let i = 1; i <= 18; i++) {
        items.push(
            <div 
                className={'item item-' + i.toString()}
            >
                <div className={'bg-card' + (flipped[i] ? ' bg-card-flipped' : '')}>
                    <img
                        src={images[i]}
                        className="bg-image bg-card-front"
                    />
                    <img
                        src={images[i + 1]}
                        className="bg-image bg-card-back"
                    />
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="bg-main-container">
                <div className="bg-grid-container bg-anchor-1">
                    <div className="bg-grid">
                        {items}
                    </div>
                </div>
            </div>
            <div className="bg-grid-container bg-anchor-2">
                    <div className="bg-grid-screen"></div>
                </div>
        </>
    )
}

export default Background