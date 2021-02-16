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
    render() {
        return (
            <Section className='balance-box'>
               Balance: ${this.props.amount}
            </Section>
        )
    }
}


AccountBalance.propTypes = {
    amount : PropTypes.number.isRequired
}
