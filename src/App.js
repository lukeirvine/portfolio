import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './components/pages/homepage/Homepage';
import Portfolio from './components/pages/portfolio/Portfolio';
import Error from "./components/pages/error/Error";

const App = () => {
  return (
    <HashRouter>
          <Switch>
              <Route path="/" component={Homepage} exact/>
              <Route path="/apps" component={Portfolio} exact/>
              <Route render={(props) => <Error {...props}/>}/>
          </Switch>
    </HashRouter>
  );
}

export default App;
