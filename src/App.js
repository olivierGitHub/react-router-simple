import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Calculator from './component/calculator.js';
import NotFound from './component/notFound.js';
import Navigation from './component/navigation.js';
import Home from './component/home.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <div className="App-intro">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/calculator" component={Calculator} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
        </Router>
    );
  }
}

export default App;
