import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './components/pages/homepage/Homepage';
import Portfolio from './components/pages/portfolio/Portfolio';
import Error from "./components/pages/error/Error";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} onUpdate={() => window.scrollTo(0,0)}>
      <div>
          {/* <ScrollToTop/> */}
          <Switch>
              <Route path="/" component={Homepage} exact/>
              <Route path="/apps" component={Portfolio} exact/>
              <Route render={(props) => <Error {...props}/>}/>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
