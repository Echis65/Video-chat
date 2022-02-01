import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import VideoCall from "./pages/meeting";
import JoinMeeting from "./pages/join";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={JoinMeeting} />
            <Route exact path="/video/:id" component={VideoCall} />
          </Switch>
        </Router>
      </>
    );
  }
}
