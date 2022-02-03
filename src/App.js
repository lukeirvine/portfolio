import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './components/pages/homepage/Homepage';
import Homepage2 from './components/pages/homepage2/Homepage2';
import Portfolio from './components/pages/portfolio/Portfolio';
import Music from './components/pages/music/Music';
import Contact from './components/pages/contact/Contact';
import Error from "./components/pages/error/Error";

const App = () => {
  return (
    <HashRouter>
          <Switch>
              <Route path="/" component={Homepage2} exact/>
              <Route path="/apps" component={Portfolio} exact/>
              <Route path="/music" component={Music} exact/>
              <Route path="/contact" component={Contact} exact/>
              <Route render={(props) => <Error {...props}/>}/>
          </Switch>
    </HashRouter>
  );
}

export default App;
