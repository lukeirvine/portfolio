import React, { useEffect } from "react";
import NavBar from "./../../nav-bar/NavBar";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { sleep } from "./../../../resources/functions";
import "./Homepage.css";

const techStack = [
  {
    name: "JavaScript",
    url: "https://www.javascript.com/",
  },
  {
    name: "Python",
    url: "https://www.python.org/",
  },
  {
    name: "C++",
    url: "https://cplusplus.com/",
  },
  {
    name: "React.js",
    url: "https://reactjs.org/",
  },
  {
    name: "React Native",
    url: "https://reactnative.dev/",
  },
  {
    name: "Expo",
    url: "https://docs.expo.dev/",
  },
  {
    name: "Firebase",
    url: "https://firebase.google.com",
  },
  {
    name: "Babylon.js",
    url: "https://www.babylonjs.com/",
  },
  {
    name: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
];

const Homepage = () => {
  const isMobile = window.screen.width < 992;

  useEffect(() => {
    (async () => {
      await sleep(500);
      window.scrollTo(0, 20);
      await sleep(100);
      window.scrollTo(0, 0);
      await sleep(100);
      window.scrollTo(0, 20);
      await sleep(100);
      window.scrollTo(0, 0);
    })();
  }, []);

  return (
    <>
      {/* <NavBar /> */}
      <div className="hp-page">
        <img
          className="hero-img hp-hero"
          alt=""
          src="https://i.imgur.com/9hZQkUs.jpg"
        />
        <div className="hp-content">
          <div className="hp-avatar-wrapper">
            <img
              className="hp-avatar"
              alt="avatar"
              src="https://i.imgur.com/3EAWXp9.jpg"
            />
          </div>
          <h1 className="page-title">Luke Irvine</h1>
          <div className="hp-identity">
            <h2 className="hp-identity-item">Full-Stack Developer </h2>
            <h2 className="hp-identity-item">Musician </h2>
            <h2 className="hp-identity-item">Outdoor Adventurer</h2>
          </div>
          <p className="hp-tagline">
            I love solving people's problems and making their lives easier with
            engaging MicroSaaS web apps, mostly using React.js and Firebase.
          </p>
          <div className="hp-tech-stack">
            {techStack.map((item) => (
              <a target="_blank" className="hp-tech-stack-item" href={item.url}>
                {item.name}
              </a>
            ))}
          </div>
          <div className="hp-link-container">
            <Button
              variant="light"
              className="hp-link-btn"
              as={Link}
              to="/apps"
            >
              <i className="bi-tools" />
              <span className="hp-link-btn-text">Apps</span>
            </Button>
            <Button
              variant="light"
              className="hp-link-btn"
              href="https://github.com/lukeirvine"
              target="_blank"
            >
              <i className="bi-github" />
              <span className="hp-link-btn-text">Code</span>
            </Button>
            <Button
              variant="light"
              className="hp-link-btn"
              href="https://www.linkedin.com/in/luke-irvine-73b136186/"
              target="_blank"
            >
              <i className="bi-linkedin" />
              <span className="hp-link-btn-text">Linkedin</span>
            </Button>
            <Button
              variant="light"
              className="hp-link-btn"
              href="https://www.upwork.com/freelancers/~0188a15de9cd140909?viewMode=1"
              target="_blank"
            >
              <i className="bi-code-slash" />
              <span className="hp-link-btn-text">Upwork</span>
            </Button>
            <Button
              variant="light"
              className="hp-link-btn"
              as={Link}
              to="/contact"
            >
              <i className="bi-envelope" />
              <span className="hp-link-btn-text">Contact</span>
            </Button>
            {/* <Button variant="light" className="hp-link-btn">
                            <i className='bi-youtube' />
                            <span className="hp-link-btn-text">Music</span>
                        </Button> */}
          </div>
        </div>
        {/* <Footer className="hp-footer" /> */}
      </div>
    </>
  );
};

export default Homepage;
