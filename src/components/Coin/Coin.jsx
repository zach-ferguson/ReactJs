import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
    border: 1px solid whitesmoke;
    width: 20vh;
`

export default function Coin(props) {
    const handleClick = (event) => {
        event.preventDefault();
        props.handleRefresh(props.id);
    }
    const balance = props.showBalance ?
        <Td>{props.balance}</Td> : null;
    return(
        <tr>
            <Td>{props.name} </Td>
            <Td>{props.ticker} </Td>
            <Td>${props.price} </Td>
            <Td>
                <form>
                    <button onClick={handleClick}>Refresh</button>
                </form>
            </Td>
            {balance}
        </tr>
    );
}
 

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired
}

