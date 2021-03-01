import React, {useState, useEffect} from 'react';
import AccountBalance from '../AccountBalance/AccountBalance';
import CoinList from '../CoinList/CoinList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import About from '../About/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

import 'bootswatch/dist/darkly/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all.js';

const Div = styled.div`
  text-align: center;
  background-color:   rgb(24, 31, 26);
`

const CoinCount = 10;
const CoinsURL = 'https://api.coingecko.com/api/v3/coins/'

export default function Home(){

  const [balance, setBalance] = useState(10000);
  const [showBalanceState, setShowBalanceState] = useState(true);
  const [coinData, setCoinData] = useState([]);

 

  const componentDidMount = async () => {

    const response = await axios.get(CoinsURL);
    const coinIds = response.data.slice(0,CoinCount).map(coin => coin.id);
    const promises = coinIds.map((id) => axios.get(CoinsURL + id).catch(function(err){console.log(err)}));
    const coinData  = await Promise.all(promises);
    const coinDetails = coinData.map(function(response) {
      const coin = response.data;
      return{
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol.toUpperCase(),
        balance: 0,
        price: parseFloat(Number(coin.market_data.current_price.usd).toFixed(4)),
      }
    });
    setCoinData(coinDetails); //this.setState({coinData: coinDetails});
    }; 

  useEffect(function(){
    if(coinData.length === 0){
      componentDidMount();
    }
  });

  const handleShowBalance = () => {
    setShowBalanceState(oldValue => !oldValue);
  }

  const handleRefresh = async (valueChangeId) => {
    const response = await axios.get(CoinsURL + valueChangeId).catch(function(err){console.log(err)});
    const newCoinData = coinData.map( function( values ) {
      let newValues = {...values};  // copies 'values' so we can change any as needed
      if (valueChangeId === values.key){
        newValues.price = parseFloat(Number(response.data.market_data.current_price.usd).toFixed(4))
      }
        return newValues;
      });
    setCoinData(newCoinData);
  };


  const handleInfo = async (infoRequestId) => {
    const response = await axios.get(CoinsURL + infoRequestId).catch(function(err){console.log(err)});
  }

  const handleTransaction = async (isBuy, valueChangeId) => {
    const balanceChange = isBuy ? 1 : -1;
    const response = await axios.get(CoinsURL + valueChangeId).catch(function(err){console.log(err)});
    const currentPrice = response.data.market_data.current_price.usd;

    if(isBuy && balance > currentPrice){
      const newCoinData = coinData.map( function(values) {
        let newValues = {...values};
        if ( valueChangeId == values.key){
          newValues.balance += balanceChange;
          setBalance( oldBalance => oldBalance - balanceChange * newValues.price);
        }
        return newValues;
      });
      setCoinData(newCoinData);
    }
    else if (isBuy && balance < currentPrice){alert("Transaction failed: Insufficient Funds")}
    else if (!isBuy){
      const newCoinData = coinData.map( function(values) {
        let newValues = {...values};
        if ( valueChangeId == values.key ){
          if (newValues.balance > 0 ){
            newValues.balance += balanceChange;
            setBalance( oldBalance => oldBalance - balanceChange * newValues.price);
          }
          else if (newValues.balance <= 0){
            alert("Transaction failed: Not enough coins");
          }
        }
          return newValues;
      });
      setCoinData(newCoinData);
    }
  }
  return (
    <Div className="Home">
      <Header/>
      <AccountBalance amount={balance}
                      showBalance={showBalanceState} 
                      handleShowBalance={handleShowBalance}/>
      <CoinList coinData={coinData}
                showBalance={showBalanceState}
                handleRefresh={handleRefresh}
                handleShowBalance={handleShowBalance}
                handleTransaction={handleTransaction}
                handleInfo={handleInfo}/>
      <Footer/>
    </Div>
  );
  
}


