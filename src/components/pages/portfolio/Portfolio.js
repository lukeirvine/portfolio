import React from 'react';
import NavBar from './../../nav-bar/NavBar';
import Footer from './../../footer/Footer';
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
                            <i className="bi-arrow-up-circle-fill app-icon" />
                            <h2 className="app-name">GoalTop</h2>
                        </div>
                        <p className="app-dates">
                            October 2021 - present
                        </p>
                        <div className="app-content">
                            <img className="app-demo-img" alt="small groups demo" src="https://i.imgur.com/xyYcivg.mp4" />
                            <div className="app-description">
                                <p className="app-par">
                                    GoalTop was born out of having too much to do and not enough
                                    motivation to do it. I figured if I could get my goals and intimidating
                                    countdown timers where I see them everyday, I would be more productive.
                                    It was either this or buy a whiteboard to go above my desk. I guess I'm 
                                    too cheap for that.
                                </p>
                                <p className="app-par">
                                    This is my first app I'm going to market publicly. It is currently in
                                    beta testing and will hopefully be released for public use in mid
                                    December 2021, just in time for all those new-years resolutions.
                                </p>
                                <p className="app-par">
                                    If you'd like to participate in the
                                    beta, <a href="mailto: lukeirvinefreelance@gmail.com">email me</a> and
                                    I'll send you the beta access key.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="app-container app-dark" id="smallgroups-container">
                        <div className="app-name-container">
                            <i className="bi-people-fill app-icon" />
                            <h2 className="app-name">Small Groups Website</h2>
                        </div>
                        <p className="app-dates">
                            December 2020 - Present
                        </p>
                        <div className="app-content">
                            <img className="app-demo-img" alt="small groups demo" src="https://i.imgur.com/CBQu48z.mp4" />
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
                    <div className="app-container" id="survey-container">
                        <div className="app-name-container">
                            <i className="bi-pencil-square app-icon" />
                            <h2 className="app-name">Survey Counter</h2>
                        </div>
                        <p className="app-dates">
                            July 2021
                        </p>
                        <div className="app-content">
                            <img className="app-demo-img" alt="small groups demo" src="https://i.imgur.com/NfaTfld.mp4" />
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
                                    <li>Download json object for survey data to be uploaded to another account</li>
                                    <li>Create shareable link to display survey data without being logged in</li>
                                </ul>
                                <p className="app-par">
                                    The camp staff in charge of the surveys loved using this app
                                    and enjoyed being able to quickly share results with other staff via
                                    the shareable link and will no doubt be using this app in future summers.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="app-container app-dark" id="meal-container">
                        <div className="app-name-container">
                            <i className="bi-tv app-icon" />
                            <h2 className="app-name">Meal Announcements</h2>
                        </div>
                        <p className="app-dates">
                            August 2021
                        </p>
                        <div className="app-content">
                            <img className="app-demo-img" alt="small groups demo" src="https://i.imgur.com/iIgP5Tj.mp4" />
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
                </div>
                {/* <Footer /> */}
            </div>
        </>
    )
}

export default Portfolio;