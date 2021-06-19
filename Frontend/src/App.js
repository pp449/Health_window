import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Counting from "./views/Counting";
import Inbody from "./views/Inbody";
import Home from "./views/Home";
import Community from "./views/Community";
import Recommend from "./views/Recommend";
import "./scss/App.scss";
import login from "./views/login";
import signup from "./views/signup";
import Navigation from "./components/Navigation";
import Todolist from "./components/community/Todolist";
import Routine from "./components/community/Routine";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/login" component={login} />
      <Route path="/signup" component={signup} />
      <Route path="/inbody" component={Inbody} />
      <Route path="/counting" component={Counting} />
      <Route path="/community" component={Community} />
      <Route path="/community/to-do-list" component={Todolist} />
      <Route path="/community/routine" component={Routine} />
      <Route path="/recommend" component={Recommend} />
    </BrowserRouter>
  );
}

export default App;
