import React from 'react';
import './App.css';

import Home from "./pages/Home";
import Venues from "./pages/Venues";
import SingleVenue from "./pages/SingleVenue";
import Error from "./pages/Error";

import {Route, Switch} from 'react-router-dom';

import Navbar from "./components/Navbar";

function App() {
  return (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/venues/" component={Venues} />
      <Route exact path="/venues/:ndani" component={SingleVenue} />
      <Route component={Error} />
    </Switch>
  </>
  );
}

export default App;
