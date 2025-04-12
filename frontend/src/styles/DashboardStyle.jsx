import { styled } from 'styled-components'

export const DConteiner = styled.div`
    display: flex;
    width:100%;
    justify-content: space-between;
`

export const Text = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    color: ${({theme})=>theme.color};
`

export const Result = styled.span`
    font-family: sans-serif;
    font-size: 20px;
    color: #52576a;
`