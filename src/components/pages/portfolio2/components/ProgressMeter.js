import React from 'react';
import "./ProgressMeter.css";

const ProgressMeter = (props) => {
  const {
    index,
    setIndex,
    content
  } = props;

  return <>
    <div className="pm-container">
      <div className="pm-line"></div>
      {content.map((item, i) => (
        <div 
          className="pm-group"
          onClick={() => {
            setIndex(i);
          }}
        >
          <div
            className={"pm-dot pm-dot-" + i.toString()}
            style={{
              left: (10 + i * (79 / (content.length - 1))).toString() + "%"
            }}
          />
          <div 
            className={"pm-text pm-text-" + i.toString()}
            style={{
              left: (10 + i * (79 / (content.length - 1))).toString() + "%"
            }}
          >
            <h2 className="pm-title">{item.title}</h2>
            <h3
              className="pm-date"
            >{item.date}</h3>
          </div>
        </div>
      ))}
      <div 
        className="pm-active-dot"
        style={{
          left: (10 + index * (79 / (content.length - 1))).toString() + "%"
        }}
      />
    </div>
  </>
}

export default ProgressMeter;