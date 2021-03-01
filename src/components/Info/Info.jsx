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
  import CoinInfo from './CoinInfo/CoinInfo';

  

export default function Info() {
    let { path, url } = useRouteMatch();

    const CoinCount = 10;
    const CoinsURL = 'https://api.coingecko.com/api/v3/coins/'
    const [coinData, setCoinData] = useState([]);

    const componentDidMount = async () => {
    
        const response = await axios.get(CoinsURL);
        const coinIds = response.data.slice(0,CoinCount).map(coin => coin.id);
        const promises = coinIds.map((id) => axios.get(CoinsURL + id).catch(function(err){console.log(err)}));
        const coinData  = await Promise.all(promises);
        const newCoinData = coinData.map(function(response) {
        const coin = response.data;
        return{
            key: coin.id,
            name: coin.name,
            ticker: coin.symbol.toUpperCase(),
            balance: 0,
            price: coin.market_data.current_price.usd,
        }
        });
        setCoinData(newCoinData); 
        console.log(coinData);
        };  
    
    
    useEffect(function(){
       if(coinData.length === 0){
        componentDidMount();
      }
    });
    return (
    <div>
      <h2>Coin Info landing page</h2>
      
      <Switch>
        <Route path={`${path}/:coinId`}>
          <CoinInfo/>
        </Route>
      </Switch>
    </div>

        
    )
}
