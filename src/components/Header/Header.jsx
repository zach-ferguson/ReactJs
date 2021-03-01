import React from 'react'
import logo from '../../header-image.png'; //credit to https://mixkit.co/@supriyabhonsle/ , thx
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const AppHeader = styled.header`
    background-color: rgb(20, 31, 32);
    border-bottom: 1px solid #454d55;
    min-height: 2vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    font-size: calc(10px + 1vmin);
    color: white;
`
const AppLogo = styled.img`
    height: 20vmin;
    pointer-events: none;
    padding: 15px;
    border-radius: 25%;
`
const Title = styled.h1`
    font-size: calc(10px + 3vmin);
    color: whitesmoke
`

export default function Header(){

  return (
  <Router>
    <AppHeader>
      <AppLogo src={logo} alt='react logo' className='App-logo'/>
      <Title>
         Root Beer Swap
      </Title>
    </AppHeader>
  </Router>
  )
    
}
