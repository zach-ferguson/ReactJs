import React, { Component } from 'react'
import logo from '../../logo.svg';
import styled from 'styled-components';

const AppHeader = styled.header`
    background-color: #282c34;
    min-height: 2vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`
const Title = styled.h1`
    font-size: 4rem;
    color: whitesmoke
`
const AppLogo = styled.img`
    height: 20vmin;
    pointer-events: none;
`
export default class Header extends Component {
    render() {
        return (
        <AppHeader>
          <AppLogo src={logo} alt='react logo' className='App-logo'/>
          <Title>
            Zach's React App
          </Title>
        </AppHeader>
        )
    }
}
