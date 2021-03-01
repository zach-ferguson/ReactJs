import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import styled from 'styled-components';

const NavbarDiv = styled.section`
    min-width: 100%;
`
const Li = styled.li`
    padding: 10px;
    font-size: 20px;
    font-color:
`


export default function Navbar() {


    return (
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
                <Link to="/portfolio">Portfolio</Link>
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
            <app/>
          </Route>
          <Route path="/users">
            <app/>
          </Route>
          <Route path="/">
            <app/>
          </Route>
        </Switch>
    </NavbarDiv>
    </Router>
    )
    
  
}
