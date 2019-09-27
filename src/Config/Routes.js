import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import App from "../App";

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/trials" render={() => <h1>Past Trials</h1>} />
            <Route exact path="/how-it-work" render={() => <h1>How It Works</h1>} />
            <Route exact path="/login" render={() => <h1>Log In / Sign Up</h1>} />
            <Route exact path="/search" render={() => <h1>Search</h1>} />
            <Route exact path="/terms" render={() => <h1>Terms and Conditions</h1>} />
            <Route exact path="/privacy" render={() => <h1>Privacy</h1>} />
            <Route exact path="/contact" render={() => <h1>Contact Us</h1>} />
            <Route exact path="/search" render={() => <h1>Search</h1>} />
            <Route exact path="/follow" render={() => <h1>follow</h1>} />
            <Route exact path="/Facebook" render={() => <h1>facebook</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routes;
