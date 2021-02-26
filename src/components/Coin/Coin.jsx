import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
    border: 1px solid whitesmoke;
    width: 20vh;
`

export default class Coin extends Component {
    handleClick = (event) => {
        event.preventDefault();
        console.log(this);
        this.props.handleRefresh(this.props.key);
    }

    render(){
        const balance = this.props.showBalance ?
            <Td>{this.props.balance}</Td> : null;

        return(
            <tr>
                <Td>{this.props.name} </Td>
                <Td>{this.props.ticker} </Td>
                <Td>${this.props.price} </Td>
                <Td>
                    <form>
                        <button onClick={this.handleClick}>Refresh</button>
                    </form>
                </Td>
                {balance}
            </tr>
        );
    }
}

Coin.propTypes = {
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired
}

