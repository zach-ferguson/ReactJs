import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
  } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

const PriceTable = styled.table`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 50%;
    margin-left: 25%;
`
const Td = styled.td`
    width: 10vh;
    border: 1px solid;
`
const Tr = styled.tr`
 
`

const CoinsURL = 'https://api.coingecko.com/api/v3/coins/'

export default function CoinInfo() {

    const [singleCoinData, setSingleCoinData] = useState([]);

    const {coinId} = useParams();
    console.log(coinId,coinId,coinId);
   
    const componentDidMount = async function (coinId) {
        const response = await axios.get(CoinsURL + coinId).catch(function(err){console.log(err)});
        const pulledData = response.map(coin => coin.data);
        setSingleCoinData(pulledData);
    }
 
    useEffect(function(){
      if(singleCoinData.length === 0){
        componentDidMount(coinId);
      }
    });

    console.log(singleCoinData);
    return (
        <div>
            <h1>{singleCoinData.name}</h1>
            <p>{singleCoinData.symbol}</p>
            <PriceTable className ="table table-striped table-dark">
                <thead>
                <th>Price Action</th>
                <Tr> 
                    <Td>1 Hour</Td>
                    <Td>24 Hour</Td>
                    <Td>7 Day</Td>
                    <Td>30 Day</Td>
                    <Td>1 Year</Td>
                </Tr>
                </thead>
                <tbody>
                    <Tr>
                        <Td>{singleCoinData.market_data.price_change_percentage_1h_in_currency.usd}%</Td>
                        <Td>{singleCoinData.market_data.price_change_percentage_24h_in_currency.usd}%</Td>
                        <Td>{singleCoinData.market_data.price_change_percentage_7d_in_currency.usd}%</Td>
                        <Td>{singleCoinData.market_data.price_change_percentage_30d_in_currency.usd}%</Td>
                        <Td>{singleCoinData.market_data.price_change_percentage_1y_in_currency.usd}%</Td>
                    </Tr>
                </tbody>
            </PriceTable>
        </div>
    )
}
