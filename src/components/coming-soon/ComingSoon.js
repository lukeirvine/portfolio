import React from 'react';
import './ComingSoon.css';

const words = [
    ['C','o','m','i','n','g'],
    ['S','o','o','n']
]
let base = 0;
const phrase = (
    <h1 className="cs-phrase">
        {words.map((word, i1) => {
            if (i1 !== 0) {
                base += words[i1 - 1].length;
            }
            return (
                <div key={i1} className="cs-phrase-word">
                    {word.map((letter, i2) => {
                        console.log('letter num', i2 + 1 + base)
                        return (
                            <div 
                                key={i2} 
                                className={'cs-phrase-letter'}
                                style={{
                                    animation: '3s ease 1 csTitle' + (i2 + 1 + base).toString() + ' forwards, 1s ease 3.2s 1 shake forwards'
                                }}
                            >{letter}</div>
                        )
                    })}
                </div>
            )
        })}
    </h1>
)

const ComingSoon = props => {
    const { cName, title, bg } = props;

    return (
        <div className={"cs-page " + (cName != null ? cName : '')}>
            <h1 className={"cs-title"} style={{backgroundImage: bg}}>
                {title}
            </h1>
            {phrase}
        </div>
    )
}

export default ComingSoon;