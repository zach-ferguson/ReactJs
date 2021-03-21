import React from 'react'
import styled from 'styled-components';

const MainDiv = styled.div`

`
const BlurBox = styled.div`
    background-color: dark-gray;
    opacity: 0.2;
`
const FormBox = styled.div`
    margin: 25%;
    background-color: light-gray;
`

export default function BuyPopup(props) {
    return (
        <MainDiv>
            <BlurBox>
                <FormBox>

                </FormBox>
            </BlurBox>
        </MainDiv>
    )
}
