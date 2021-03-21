import React from 'react'
import githubLogo from '../../GitHub-Mark-Light-64px.png';
import styled from 'styled-components';

const AppFooter = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: rgb(37, 37, 37);
    min-height: 15px;
    box-shadow: 0 50vh 0 50vh rgb(37, 37, 37);
`
const GithubLink = styled.a`
    height: 5vmin;
`
const GithubLogo = styled.img`
    height: 100%;
    padding: 0px 10px;
`

export default function footer() {
    return (
        <div>
            <AppFooter>
                Thanks for using my App! Github:
                <GithubLink href="https://github.com/zach-ferguson" className='Github-link'>
                    <GithubLogo src={githubLogo} alt='github logo' className='Github-logo'/>
                </GithubLink>
            </AppFooter>
        </div>
    )
}



const AppLogo = styled.img`
    height: 20vmin;
    pointer-events: none;
    padding: 15px;
    border-radius: 25%;
`