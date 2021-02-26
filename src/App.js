import React from 'react';
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

class App extends React.Component {
  state = {
    balance: 10000,
    showBalanceState: true,
    coinData: []
  }
  componentDidMount = async () => {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    const coinIds = response.data.slice(0,CoinCount).map(coin => coin.id);
    const tickerURL = 'https://api.coingecko.com/api/v3/coins/';
    const promises = coinIds.map((id) => axios.get(tickerURL + id));
    const coinData  = await Promise.all(promises);
    const coinDetails = coinData.map(function(response) {
      const coin = response.data;
      console.log(coin);
      return{
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol.toUpperCase(),
        balance: 0,
        price: coin.market_data.current_price.usd
      }
    })

      this.setState({coinData: coinDetails});
      console.log(coinData);
      console.log(coinDetails);
    };   

    handleShowBalance = () => {
      if(this.state.showBalanceState){this.setState({showBalanceState: false});}
      else if(!this.state.showBalanceState){this.setState({showBalanceState: true});}
    }

    handleRefresh = async (valueChangeKey) => {
      const tickerURL = 'https://api.coingecko.com/api/v3/coins/';
      const URLSuffix = valueChangeKey;
      console.log(URLSuffix);
      const response = await axios.get(tickerURL + URLSuffix);
      console.log(response);
      const newCoinData = this.state.coinData.map( function( values ) {
        let newValues = {...values};  // copies 'values' so we can change any as needed
        if (valueChangeKey === values.key){
          /*const randomPercentage = 0.995 + Math.random() * .01;
          newValues.price *= randomPercentage;*/
        }
          
          return newValues;
       });
      console.log( newCoinData );
      this.setState({coinData: newCoinData});
      
    };
  
  render(){
    return (
      <Div className="App">
        <Header/>
        <AccountBalance amount={this.state.balance}
                        showBalance={this.state.showBalanceState} 
                        handleShowBalance={this.handleShowBalance}/>
        <CoinList coinData={this.state.coinData}
                  showBalance={this.state.showBalanceState}
                  handleRefresh={this.handleRefresh}
                  handleShowBalance={this.handleShowBalance}/>
      </Div>
    );
  }
}

export default App;
