import React, {useState, useEffect} from 'react';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';
import Header from './components/Header/Header';
import styled from 'styled-components';
import axios from 'axios';

const Div = styled.div`
  text-align: center;
  background-color:  rgb(34, 34, 83);
`

const CoinCount = 10;
const CoinsURL = 'https://api.coingecko.com/api/v3/coins/'

function App(props){

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
  
  
  return (
    <Div className="App">
      <Header/>
      <AccountBalance amount={balance}
                      showBalance={showBalanceState} 
                      handleShowBalance={handleShowBalance}/>
      <CoinList coinData={coinData}
                showBalance={showBalanceState}
                handleRefresh={handleRefresh}
                handleShowBalance={handleShowBalance}/>
    </Div>
  );
  
}

export default App;
