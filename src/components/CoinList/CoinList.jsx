import React from 'react'
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const CoinTable = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  background-color: rgb(24, 31, 26);
  `
const Th = styled.th`
  background-color: rgb(20, 31, 32);
  width: 16vh;
`
const ButtonTh = styled.th`
  background-color: rgb(20, 31, 32);
  width: 34vh;
`
const TableHeadRow = styled.tr`
  background-color: rgb(24, 31, 26);
  border-color: #454d55;
`

export default function CoinList(props){
  
    return (
    <CoinTable className ="table table-hover table-dark">
      <thead>
      <TableHeadRow>
        <Th>Name</Th>
        <Th>Ticker</Th>
        <Th>Price</Th>
        <Th>Balance</Th> 
        <ButtonTh>Action</ButtonTh>
      </TableHeadRow>
      </thead>
      <tbody> 
        {
          props.coinData.map(({key,name,ticker,price,balance}) =>
            <Coin  key={key}
                  coinId={key}
                  name={name} 
                  ticker={ticker} 
                  price={price}
                  balance={balance}
                  showBalance={props.showBalance}
                  handleRefresh={props.handleRefresh} 
                  handleTransaction={props.handleTransaction}
                  handleInfo={props.handleInfo} /> 
            )
          }
      </tbody>
    </CoinTable>
    )
}

