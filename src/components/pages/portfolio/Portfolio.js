import React from 'react';
import NavBar from '../../nav-bar/NavBar';
import Footer from '../../footer/Footer';
import { imgs } from '../../../resources/images';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <>
            <NavBar />
            <div className="apps-page">
                <img className="hero-img apps-hero" alt="" src="https://i.imgur.com/VjswpFA.png" />
                <h1 className="apps-title"><i className="bi-tools" />  Apps</h1>
                <div className="apps-content" >
                    <div className="app-container" id="goaltop-container">
                        <div className="app-name-container">
                            <i className="bi-music-note-beamed app-icon" />
                            <h2 className="app-name">Midi Display</h2>
                        </div>
                        <p className="app-dates">
                            January 2022
                        </p>
                        <div className="app-content">
                            <img className="app-demo-img" alt="small groups demo" src="https://i.imgur.com/CAMlsFN.png" />
                            <div className="app-description">
                                <p className="app-par">
                                    When I started configuring my setup to teach online piano lessons, I looked for a simple app online that would display 
                                    a piano keyboard with highlighted keys based on midi signals from an external keyboard. I couldn't find any elegant 
                                    solutions that clearly displayed just a keyboard and the keys pressed, so I set out to create one.
                                </p>
                                <p className="app-par">
                                    The keyboard is created entirely using CSS, which was quite a fun and scalable process. It was so satisfying to only 
                                    create one octave and then loop through the code to create as many octaves as I wanted. The keyboard also has the capability 
                                    of showing you the name of the chord being played. This process takes a bit of AI, so I used a very helpful npm library for this 
                                    features. Building on the shoulders of giants is just so cool.
                                </p>
                                <p className="app-par">
                                    Another interesting concern for this app was speed of execution. The depressed notes are kept track of in an array 
                                    which has to be appended to or truncated each time a note is played or released. It also has to be searched by each 
                                    key for that key to know if it should be highlighted or not. Furthermore, the chord analyzer runs every time a key is 
                                    pressed or released, adding even more complexity. If not implemented in an efficient manner, the app can be 
                                    easily prone to lagging. I had to refactor the code several times to increase speed and eventually got to a point where 
                                    you didn't notice any lag, making the display feel like playing a real piano. 
                                </p>
                                <p className="app-par">
                                    This app is currently free to use at <a href="https://www.mididisplay.com" target="_blank">mididisplay.com</a>, though it will 
                                    soon be monetized and cost a buck or so.  
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="app-container app-dark" id="goaltop-container">
                        <div className="app-name-container">
                            <i className="bi-arrow-up-circle-fill app-icon" />
                            <h2 className="app-name">GoalTop</h2>
                        </div>
                        <p className="app-dates">
                            October 2021 - present
                        </p>
                        <div className="app-content">
                            <img className="app-demo-img" alt="small groups demo" src={imgs.goaltop.dashboard} />
                            <div className="app-description">
                                <p className="app-par">
                                    Goaltop was born out of having too many little things to do and no good way to keep 
                                    my eyes on the big milestones I was working towards. A whiteboard above my desk probably 
                                    would have worked, but I figured it'd be much more effective to have my goals right on 
                                    my desktop where I'd see them no matter where I was.
                                </p>
                                <p className="app-par">
                                    This app is currently in beta testing but will be available for public use soon.
                                </p>
                                <p className="app-par">
                                    If you'd like to participate in the
                                    beta, <a href="mailto: lukeirvinefreelance@gmail.com">email me</a> and
                                    I'll send you the beta access key.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="app-container" id="smallgroups-container">
                        <div className="app-name-container">
                            <i className="bi-people-fill app-icon" />
                            <h2 className="app-name">Small Groups Website</h2>
                        </div>
                        <p className="app-dates">
                            December 2020 - Present
                        </p>
                        <div className="app-content">
                            <img className="app-demo-img" alt="small groups demo" src={imgs.smallGroups.groupCards} />
                            <div className="app-description">
                                <p className="app-par">
                                    This is a website I developed to help religious organizations
                                    facilitate small group signups and facilitation. It shows potential group
                                    members the different groups available, how many people are in each along with
                                    other information, and allows them to sign up and leave different groups.
                                </p>
                                <p className="app-par">
                                    It's built using React.js, React Bootstrap Components, and Firebase.
                                    It utilizes several Firebase features such as the Realtime Database,
                                    Cloud Storage, Cloud Functions, and Authentication.
                                </p>
                                <p className="app-par">
                                    This app isn't in production yet, but will hopefully be implemented and
                                    used by Walla Walla Universtiy's Chaplain's Office in January of 2022.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="app-container app-dark" id="survey-container">
                        <div className="app-name-container">
                            <i className="bi-pencil-square app-icon" />
                            <h2 className="app-name">Survey Counter</h2>
                        </div>
                        <p className="app-dates">
                            July 2021
                        </p>
                        <div className="app-content">
                            <img className="app-demo-img" alt="small groups demo" src={imgs.surveyCounter.reports} />
                            <div className="app-description">
                                <p className="app-par">
                                    I worked at a summer camp for a number of years where we handed out
                                    paper surveys to the kids every week, but counting them and getting
                                    any kind of real data from them was a real pain. So I developed this app
                                    that makes entering the data extremely fast and then creates a series of
                                    bar charts and averages for the data.
                                </p>
                                <p className="app-list-title">Additional Features:</p>
                                <ul className="app-list">
                                    <li>Can download a json object for survey data to be uploaded to another account</li>
                                    <li>Can create a shareable link to display survey data without being logged in</li>
                                </ul>
                                <p className="app-par">
                                    The camp staff in charge of the surveys loved using this app
                                    and enjoyed being able to quickly share results with other staff via
                                    the shareable link and will no doubt be using this app in future summers.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="app-container" id="meal-container">
                        <div className="app-name-container">
                            <i className="bi-tv app-icon" />
                            <h2 className="app-name">Meal Announcements</h2>
                        </div>
                        <p className="app-dates">
                            August 2021
                        </p>
                        <div className="app-content">
                            <img className="app-demo-img" alt="small groups demo" src={imgs.mealDash.dash} />
                            <div className="app-description">
                                <p className="app-par">
                                    This is another app for the summer camp I spent a number of years
                                    working for. During our family camps, we would have chaotic meal times
                                    where campers would try to listen for when they were dismissed for
                                    food and when they were dismissed for activities. It was a mess, so
                                    I developed a small webpage that we loaded up on a smart tv in the
                                    cafeteria, and a mobile site that controlled what was shown on
                                    the tv in real time.
                                </p>
                                <p className="app-par">
                                    All the camp leadership loved this app because it completely
                                    streamlined their meals, making for happier campers and more
                                    time for the campers to do the activities they came to do.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="app-container app-dark" id="meal-container">
                        <div className="app-name-container">
                            <i className="bi-controller app-icon" />
                            <h2 className="app-name">Maze</h2>
                        </div>
                        <p className="app-dates">
                            February 2020
                        </p>
                        <div className="app-content">
                            <img className="app-demo-img" alt="small groups demo" src={imgs.maze.action} />
                            <div className="app-description">
                                <p className="app-par">
                                    This is the first major computer science project I worked on in college and it was easily the most fun. 
                                    Humorously, this was written before I understood basic javascript modules, so all the code is in 
                                    a single 'index.html' file. It's massive! Also there are several notable bugs that make me think 
                                    back on the early coding days with fondness lol.
                                </p>
                                <p className="app-par">
                                    Anyways, maybe one day I'll go back and refactor it for fun. 
                                    Until then, you can play it <a target="_blank" href="https://lukeirvine.github.io/maze-with-enemies/">here</a>! 
                                    You'll need to wait a little bit for everything to load, and if you want sound, make sure to click 
                                    the sound button *before* you choose a level. It will be chaos if you click it after.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Portfolio;