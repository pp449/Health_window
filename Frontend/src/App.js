import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Counting from "./views/Counting";
import Inbody from "./views/Inbody";
import Home from "./views/Home";
import Community from "./views/Community";
import Recommend from "./views/Recommend";
import "./scss/App.scss";
import login from "./views/login";
import Join from "./views/Join";
import Navigation from "./components/Navigation";
import WriteCommunity from "./views/WriteCommunity";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/login" component={login} />
        <Route path="/join" component={Join} />
        <Route path="/inbody" component={Inbody} />
        <Route path="/counting" component={Counting} />
        <Route path="/community" exact={true} component={Community} />
        <Route path="/community/to-do-list" component={Community} />
        <Route path="/community/routine" component={Community} />
        <Route path="/community/write" component={WriteCommunity} />
        <Route path="/recommend" component={Recommend} />
      </BrowserRouter>
    );
  }
}

export default App;
