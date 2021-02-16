import React from 'react';
import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin/Coin';
import AccountBalance from './components/AccountBalance/AccountBalance';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt='react logo' className='App-logo'/>
        <h1 className='App-title'>
          Zach's React App
        </h1>
      </header>
      <AccountBalance amount={10000} />
        <table className='coin-table'>
          <thead>
              <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Price</th>
              </tr>
          </thead>
          <tbody> 
            <Coin name="Bitcoin" ticker="BTC" price={45000.00} /> 
            <Coin name="Ethereum" ticker="ETH" price={1800.00} />
            <Coin name="Polkadot" ticker ='DOT' price={20.00} />
          </tbody>
      </table>
    </div>
  );
}

export default App;
