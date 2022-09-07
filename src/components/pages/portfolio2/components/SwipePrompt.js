import React from 'react';
import "./SwipePrompt.css";

const SwipePrompt = () => {
  return <>
    <div className="sp-container">
      <div className="sp-body">
        <div className="sp-arrows">
          {Array(10).fill(0).map((item, i) => (
            <i key={i} className="bi-chevron-right sp-moving-chevron" />
          ))}
        </div>
        <div className="sp-text">SWIPE FOR MORE</div>
        <div className="sp-slider">
          <i className="bi-chevron-right sp-chevron" />
        </div>
      </div>
    </div>
  </>
}

export default SwipePrompt;