import { styled } from 'styled-components'

export const DConteiner = styled.div`
    display: flex;
    width:100%;
    justify-content: space-between;
    `

export const Text = styled.h1`
    font-size: 30px;
    color: ${({theme})=>theme.color};
    margin: 0;
`

export const Result = styled.span`
    font-family: sans-serif;
    font-size: 15px;
    font-weight: 100;
    color: #52576a;
`