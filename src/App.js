import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";

import Navbar from "./components/Navbar/Navbar";
import Newsfeed from "./components/Newsfeed/Newsfeed";
import Submission from "./components/Submission/Submission";
import Profile from "./components/Profile/Profile";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Newsfeed />
          </Route>
          <Route path="/submit/:id">
            <Submission />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
