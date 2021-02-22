import React from 'react';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';
import Header from './components/Header/Header';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
  background-color:  rgb(34, 34, 83);
`

class App extends React.Component {
  state = {
    balance: 10000,
    showBalanceState: true,
    coinData: [
      {
        name: "Bitcoin",
        ticker:"BTC",
        price: 48000.00,
        balance: 0.25
      },
      {
        name: "Ethereum",
        ticker: "ETH",
        price: 1800.00,
        balance: 34
      },
      {
        name: "Polkadot",
        ticker: "DOT",
        price: 30.00,
        balance: 447
      },
      {
        name: "Trustswap",
        ticker: "SWAP",
        price: 1.71,
        balance: 464
      }
    ]
  }
  classProperty = 'value'
    handleShowBalance = () => {
      if(this.state.showBalanceState){this.setState({showBalanceState: false});}
      else if(!this.state.showBalanceState){this.setState({showBalanceState: true});}
    }

    handleRefresh = (valueChangeTicker) => {
      const newCoinData = this.state.coinData.map( function( values ) {
        let newValues = {...values};  // copies 'values' so we can change any as needed
        if (valueChangeTicker === values.ticker){
          const randomPercentage = 0.995 + Math.random() * .01;
          newValues.price *= randomPercentage;
        }
          return newValues;
       });

      this.setState({coinData: newCoinData});
      console.log( newCoinData );
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
