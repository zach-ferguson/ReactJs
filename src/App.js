import React, {useState, useEffect} from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Info from './components/Info/Info';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

import 'bootswatch/dist/darkly/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { render } from '@testing-library/react';

const Div = styled.div`
  text-align: center;
  background-color:   rgb(24, 31, 26);
`
const NavbarDiv = styled.section`
    min-width: 100%;
`
const Li = styled.li`
    padding: 10px;
    font-size: 20px;
    font-color:
`

function App(){
  return (
    <Div className="App">
      <Router>
        <NavbarDiv>        
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">RBTrade</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
              <ul className="navbar-nav mr-auto">
                <Li>
                  <Link to="/">Home
                    <span className="sr-only">(current)</span>
                  </Link>
                </Li>
                <Li className="nav-item">
                  <Link to="/info">Info</Link>
                </Li>
                <Li className="nav-item">
                  <Link to="/about">About</Link>
                </Li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search"></input>
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
          <Switch>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/info">
              <Info/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </NavbarDiv>
      </Router>
    </Div>
);
}

export default App;

