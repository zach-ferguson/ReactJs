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

export default class AccountBalance extends Component {
    handleShowBalance = (e) => {
        this.props.handleShowBalance();
    }
    render() {
        const buttonText = (this.props.showBalance)? "Hide Balance" : "Show Balance";
        return (
            <> {this.props.showBalance ? 
                    <Section> 
                       Balance: ${this.props.amount}   
                    </Section>
                    : null}
                <button onClick={this.handleShowBalance}>{buttonText}</button>
            </>
        );
    }
}

AccountBalance.propTypes = {
    amount : PropTypes.number.isRequired
}