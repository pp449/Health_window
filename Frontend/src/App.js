import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Counting from "./views/Counting";
import Inbody from "./views/Inbody";
import Home from "./views/Home";
import Community from "./views/Community";
import Recommend from "./views/Recommend";
import "./scss/App.scss";
import login from "./views/login";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/login" component={login} />
      <Route path="/inbody" component={Inbody} />
      <Route path="/counting" component={Counting} />
      <Route path="/community" component={Community} />
      <Route path="/recommend" component={Recommend} />
    </BrowserRouter>
  );
}

export default App;
