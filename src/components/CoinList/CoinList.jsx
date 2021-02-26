import React from 'react'
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const CoinTable = styled.table`
    display: inline-block;
    color: white;
    margin: 50%, 50%;
  `

export default function CoinList(props){
  const balance = props.showBalance ?
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
            props.coinData.map(({key,name,ticker,price,balance}) =>
             <Coin  key={key}
                    id={key}
                    handleRefresh={props.handleRefresh} 
                    name={name} 
                    ticker={ticker} 
                    price={price}
                    balance={balance}
                    showBalance={props.showBalance} /> 
              )
            }
        </tbody>
    </CoinTable>
    )
}

