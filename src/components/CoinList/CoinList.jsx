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
        return (
        <CoinTable className='coin-table'>
            <thead>
                <tr>
                  <th>Name</th>
                  <th>Ticker</th>
                  <th>Price</th>
                </tr>
            </thead>
            <tbody> 
              {
                this.props.coinData.map( ({name,ticker,price}) =>
                 <Coin key={ticker} name={name} ticker={ticker} price={price} /> 
                  )
                }
            </tbody>
        </CoinTable>
        )
    }
}
