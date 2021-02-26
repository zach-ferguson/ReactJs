import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    border: 1px solid red;
    text-align: left;
    font-size: 1rem;
    color: greenyellow;
    padding: 1rem;
`

export default function AccountBalance(props) {
    const handleShowBalance = (e) => {
        props.handleShowBalance();
    }
    
    const buttonText = (props.showBalance)? "Hide Balance" : "Show Balance";
    return (
        <> {props.showBalance ? 
                <Section> 
                   Balance: ${props.amount}   
                </Section>
                : null}
            <button onClick={handleShowBalance}>{buttonText}</button>
        </>
    );
}


AccountBalance.propTypes = {
    amount : PropTypes.number.isRequired
}