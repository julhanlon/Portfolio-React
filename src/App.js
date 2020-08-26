import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav/Nav";
import Arch from "./components/Arch";
import Web from "./components/Web";
import Opening from "./components/Opening";

function App() {
  return (
    <div className="App">
    <Router>
      <Nav />
      <Switch>
        <Route path="/architecture">
        <div>
          <Arch/>
            </div>
        </Route>
        <Route  path="/webdesign">
          <div>
          <Web/>
            </div>
        </Route>
        <Route path ="/contact">
        <div>

        </div>
        </Route>
        <Route  path="/">
        <div>
        <Opening/>
        </div>
        </Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;
