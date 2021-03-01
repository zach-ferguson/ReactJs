import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
  } from "react-router-dom";
import About from '../About/About';
const Td = styled.td`
    border: 1px solid;
    width: 16vh;
`
const TdButtons = styled.td`
    width: 34vh;
    border: 1px solid;
`
const Button = styled.button`
    margin: 0px 5px;
`


export default function Coin(props) {
    const handleRefresh = (e) => {
        e.preventDefault();
        props.handleRefresh(props.coinId);
    }
    const handleBuy = (e) => {
        e.preventDefault();
        props.handleTransaction(true, props.coinId);
    }
    const handleSell = (e) => {
        e.preventDefault();
        props.handleTransaction(false, props.coinId);
    }
    const balance = props.showBalance ?
        <Td>{props.balance}</Td> : <Td>-</Td>;
    let { path, url } = useRouteMatch();
    return(
        <tr>
            <Td>{props.name} </Td>
            <Td>{props.ticker} </Td>
            <Td>${props.price} </Td>
            {balance}
            <TdButtons>
                <form>
                    <Button onClick={handleRefresh} className="btn btn-outline-info">Refresh</Button>
                    <Button onClick={handleBuy} className="btn btn-outline-success">Buy</Button>
                    <Button onClick={handleSell} className="btn btn-outline-danger">Sell</Button>
                    <Link to={`${url + 'info/' + props.coinId}`}>
                        <Button className="btn btn-outline-warning">Info</Button>
                    </Link>
                </form>
            </TdButtons>
        </tr>
    );
}
 

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired
}

