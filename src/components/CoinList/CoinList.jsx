import React, { Component } from 'react'
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const CoinTable = styled.table`
    display: inline-block;
    color: white;
    margin: 50%, 50%;
  `

export default class CoinList extends Component {
    render() {
      const balance = this.props.showBalance ?
        <th>Balance</th> : null;
        return (
        <CoinTable>
            <thead>
                <tr>
                  <th>Name</th>
                  <th>Ticker</th>
                  <th>Price</th>
                  <th>Action</th>
                  {balance}
                </tr>
            </thead>
            <tbody> 
              { 
                this.props.coinData.map(({id,name,ticker,price,balance}) =>
                 <Coin  key={id} 
                        handleRefresh = {this.props.handleRefresh} 
                        name={name} 
                        ticker={ticker} 
                        price={price}
                        balance={balance}
                        showBalance={this.props.showBalance} /> 
                  )
                }
            </tbody>
        </CoinTable>
        )
    }
}
