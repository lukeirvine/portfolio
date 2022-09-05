import React, { useState, useEffect } from 'react';
import NavBar from '../../nav-bar/NavBar';
import Footer from '../../footer/Footer';
import { imgs } from '../../../resources/images';
import "./Portfolio2.css";

const content = [
  {
    title: "Camp Mivoden Mobile App",
    date: "Summer 2022",
    img: imgs.mivodenApp.threeScreens,
    bgColor: 'red',
    pars: [
      <>
        Camp Mivoden is a Christian summer camp and retreat center in Northern Idaho. I've had the privilege of working there for several 
        summers, so they asked me to create a mobile app that would feature camp media and provide 
        tools for new campers like an interactive map and up-to-date schedules.
      </>,
      <>
        From start to finish this app was a really fun learning experience. The administrative team 
        at Mivoden is less technically experienced so I got to interpret their desires into modular 
        features and realistic release versions. Once the minimum viable product was complete, 
        I spent the summer on-site monitoring the beta test. All the summer staff downloaded a beta version of the 
        app from Apple's TestFlight and gave me lots of helpful feedback and ideas. Throughout the summer I 
        worked on bug fixes, Apple App Store compliance, and the marketing materials for the App Store. Then towards 
        the end of the summer I released a finished version to the iOS app store for the final week of 
        campers to download and use.
      </>,
      <>
        This project also includes an accompanying web UI allowing Mivoden staff to edit schedules, media, 
        and map data without editing the code itself. The mobile app was built with React Native and 
        Expo's managed workflow, the web UI was built with ReactJS, and both apps use Google's Firebase for 
        a database, authentication, and cloud functions.
      </>,
      <>
        This project is still far from finished. There are UX changes to make to both apps, necessaary 
        features to release, and an Android version to release. You can check out 
        the Mivoden app on the <a target="_blank" href="https://apps.apple.com/us/app/camp-mivoden/id1628255508">App Store</a>.
      </>
    ]
  },
  {
    title: "Wordle Solver",
    date: "March 2022",
    img: imgs.wordle.desktop,
    bgColor: 'blue',
    pars: [
      <>
        Wordle is a fun little word guessing game on the New York Times' <a target="_blank" href="https://www.nytimes.com/games/wordle/index.html">website</a>. 
        It only lets you try to guess one word a day, and it quickly took off on social media when everyone started 
        sharing how many guesses it took them.
      </>,
      <>
        I was fascinated by the type of clues the game gives you, and wondered how hard it would be to filter Wordle's 
        word list based on the clue criteria. As a web developer I had to build a UI so other people could use it too, 
        which was a challenge of its own because I wanted to replicate the UI of the game itself. What resulted is a Wordle 
        solver that is pretty intuitive, easy to use, and still allows the user to engage with the actual game because they 
        have to choose which word to guess next based on the filtered word list. 
      </>,
      <>
        You too can shamelessly cheat at Wordle <a target="_blank" href="https://lukeirvine.github.io/wordle-solver">here</a>. 
        I won't tell anyone. :)
      </>
    ]
  },
  {
    title: "Midi Display",
    date: "January 2022",
    img: "https://i.imgur.com/CAMlsFN.png",
    bgColor: 'yellow',
    pars: [
      <>
        When I started configuring my setup to teach online piano lessons, I looked for a simple app online that would display 
        a piano keyboard with highlighted keys based on midi signals from an external keyboard. I couldn't find any elegant 
        solutions that clearly displayed just a keyboard and the keys pressed, so I set out to create one.
      </>,
      <>
        The keyboard is created entirely using CSS, which was quite a fun and scalable process. It was so satisfying to only 
        create one octave and then loop through the code to create as many octaves as I wanted. The keyboard also has the capability 
        of showing you the name of the chord being played. This process takes a bit of AI, so I used a very helpful npm library for this 
        features. Building on the shoulders of giants is just so cool.
      </>,
      <>
        Another interesting concern for this app was speed of execution. The depressed notes are kept track of in an array 
        which has to be appended to or truncated each time a note is played or released. It also has to be searched by each 
        key for that key to know if it should be highlighted or not. Furthermore, the chord analyzer runs every time a key is 
        pressed or released, adding even more complexity. If not implemented in an efficient manner, the app can be 
        easily prone to lagging. I had to refactor the code several times to increase speed and eventually got to a point where 
        you didn't notice any lag, making the display feel like playing a real piano. 
      </>,
      <>
        This app is currently free to use at <a href="https://www.mididisplay.com" target="_blank">mididisplay.com</a>, though it will 
        soon be monetized and cost a buck or so.
      </>
    ]
  }
]

const Portfolio2 = () => {
  const [index, setIndex] = useState(0);

  const incrementIndex = () => {
    setIndex(prev => prev < content.length - 1 ? prev + 1 : 0);
  }

  const decrementIndex = () => {
    setIndex(prev => prev > 0 ? prev - 1 : content.length - 1);
  }

  return <>
    <NavBar />
    <div className="p2-page">
      <h1 className="p2-title">Apps</h1>
      <div className="p2-canvas">
        <div className="p2-left-btn" onClick={decrementIndex}>
          <i className="bi-chevron-left p2-btn-icon" />
        </div>
        <div className="p2-right-btn" onClick={incrementIndex}>
          <i className="bi-chevron-right p2-btn-icon" />
        </div>
        {content.map((proj, i) => (
          <div className={"p2-group " + (i === index ? "" : "p2-group-hide")}>
            <div className="p2-col1">
              <h2 className={"p2-subtitle p2-subtitle-" + i.toString()}>{proj.title}</h2>
              <img
                className={"p2-img p2-img-" + i.toString()}
                src={proj.img}
                style={{backgroundColor: proj.bgColor}}
              />
            </div>
            <div className={"p2-desc p2-desc-" + i.toString()}>
              {proj.pars.map(par => (
                <p className="p2-par">
                  {par}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </>
}

export default Portfolio2;