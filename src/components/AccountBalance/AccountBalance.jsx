import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BalanceSegment = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-right: 20%;
`

const Section = styled.section`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    font-size: 1rem;
    color: greenyellow;
    padding: 1rem;
`
const BalanceToggleButton = styled.button`
    display: flex;
    justify-content: center; 
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

export default function AccountBalance(props) {
    const handleShowBalance = (e) => {
        props.handleShowBalance();
    }
    
    const buttonText = (props.showBalance)? "Hide Balance" : "Show Balance";
    const buttonClass = 'btn ' + ('btn-primary')

    return (
        <BalanceSegment> {props.showBalance ? 
                <Section> 
                   Account Balance: ${props.amount.toFixed(2)}   
                </Section>
                : null}
            <BalanceToggleButton onClick={handleShowBalance} className = {buttonClass}>
                    {buttonText}
            </BalanceToggleButton>
        </BalanceSegment>
    );
}


AccountBalance.propTypes = {
    amount : PropTypes.number.isRequired
}