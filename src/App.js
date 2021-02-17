import React from 'react';
import './App.css';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';
import Header from './components/Header/Header'
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
  background-color:  rgb(34, 34, 83);
`

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        balance: 10000,
        coinData: [
          {
            name: "Bitcoin",
            ticker:"BTC",
            price: 48000.00
          },
          {
            name: "Ethereum",
            ticker: "ETH",
            price: 1800.00
          },
          {
            name: "Polkadot",
            ticker: "DOT",
            price: 30.00
          },
          {
            name: "Trustswap",
            ticker: "SWAP",
            price: 1.71
          }
        ]
      }
    }
  render(){
    return (
      <Div className="App">
        <Header/>
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData}/>
      </Div>
    );
  }  
}

export default App;
