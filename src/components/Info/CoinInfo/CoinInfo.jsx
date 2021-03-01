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

const CoinsURL = 'https://api.coingecko.com/api/v3/coins/'

export default function CoinInfo() {
    const [singleCoin, setSingleCoin] = useState([]);
    let {coinId} = useParams();
    console.log(coinId,coinId,coinId);
    const coinData = [];
    const coin = [];

   
    const componentDidMount = async function (coinId) {
        console.log(coinId);
        const coinData = await axios.get(CoinsURL + coinId).catch(function(err){console.log(err)});
        const coin = coinData.data;
        console.log(coin.symbol);
    }
 
    useEffect(function(){
      if(coinData.length === 0){
        componentDidMount(coinId);
      }
    });

console.log(coin.symbol);
    return (
        <div>
            <h1> sup from CoinInfo component</h1>
            <p>{coin.symbol}</p>
        </div>
    )
}
