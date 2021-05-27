import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Counting from "./views/Counting";
import Inbody from "./views/Inbody";
import Home from "./views/Home";
import Community from "./views/Community";
import Recommend from "./views/Recommend";
import "./scss/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/inbody" component={Inbody} />
      <Route path="/counting" component={Counting} />
      <Route path="/community" component={Community} />
      <Route path="/recommend" component={Recommend} />
    </BrowserRouter>
  );
}

export default App;
