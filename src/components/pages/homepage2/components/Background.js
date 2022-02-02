import React, { useState } from 'react';
import { imgs } from '../../../../resources/images';
import { shuffleArray } from '../../../../resources/functions';
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
images = shuffleArray(images);

var items = [];
for (let i = 1; i <= 18; i++) {
    items.push(
        <div 
            className={'item item-' + i.toString()}
            style={{
                backgroundColor: colors[i % 10],
            }}
        >
            <img
                src={images[i]}
                className="bg-image"
            />
        </div>
    )
}

const Background = () => {

    return (
        <>
            <div className="bg-grid-container">
                <div className="bg-grid">
                    {items}
                </div>
            </div>
            <div className="bg-grid-container">
                <div className="bg-grid-screen"></div>
            </div>
        </>
    )
}

export default Background