import React, { useState, useEffect } from 'react';
import NavBar from '../../nav-bar/NavBar';
import Footer from '../../footer/Footer';
import ProgressMeter from './components/ProgressMeter';
import ScrollToTop from '../../scrolling/ScrollToTop';
import { content } from './Content';
import SwipeListener from 'swipe-listener';
import "./Portfolio2.css";

const Portfolio2 = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    var page = document.getElementById("p2-page");
    var listener = SwipeListener(page);
    console.log("adding listener");
    page.addEventListener('swipe', swipeFunction)

    return () => page.removeEventListener('swipe', swipeFunction)
  }, []);

  const swipeFunction = e => {
    let directions = e.detail.directions;

    if (directions.left) {
      console.log("Incrementing")
      incrementIndex();
    }
    if (directions.right) {
      decrementIndex();
    }
  }

  const incrementIndex = () => {
    setIndex(prev => prev < content.length - 1 ? prev + 1 : 0);
  }

  const decrementIndex = () => {
    setIndex(prev => prev > 0 ? prev - 1 : content.length - 1);
  }

  return <>
    <ScrollToTop />
    <div className="p2-page" id="p2-page">
      <NavBar />
      <h1 className="p2-title">Apps</h1>
      <div className="p2-canvas">
        <div className="p2-left-btn" onClick={decrementIndex}>
          <i className="bi-chevron-left p2-btn-icon" />
        </div>
        <div className="p2-right-btn" onClick={incrementIndex}>
          <i className="bi-chevron-right p2-btn-icon" />
        </div>
        {content.map((proj, i) => (
          <div 
            key={i}
            className={"p2-group " + (i === index ? "p2-group-shown" : "p2-group-hide")}
          >
            <div className="p2-col1">
              <div className="p2-text">
                <h2 className={"p2-subtitle p2-subtitle-" + i.toString()}>{proj.title}</h2>
                <h3 className="p2-date">{proj.date}</h3>
              </div>
              <img
                className={"p2-img p2-img-" + i.toString()}
                src={proj.img}
                style={{backgroundColor: proj.bgColor}}
              />
            </div>
            <div 
              className={"p2-desc p2-desc-" + i.toString()}
              style={{
                zIndex: i === index ? 10 : 0
              }}
            >
              {proj.pars.map((par, j) => (
                <p key={j} className="p2-par">
                  {par}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <ProgressMeter 
        index={index} 
        setIndex={setIndex} 
        content={content}
      />
    </div>
    {/* <Footer /> */}
  </>
}

export default Portfolio2;