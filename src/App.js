import "./App.css";
import React from "react";
import Post from "./Pages/Post";
import Articles from "./Pages/Articles";
import Edit from "./Pages/Edit";
import Header from "./Pages/Header";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/">
          <Post />
        </Route>
        <Route exact path="/post">
          <Post />
        </Route>
        <Route exact path="/articles">
          <Articles />
        </Route>
        <Route exact path="/edit">
          <Edit />
        </Route>
      </Router>
    </>
  );
}

export default App;
