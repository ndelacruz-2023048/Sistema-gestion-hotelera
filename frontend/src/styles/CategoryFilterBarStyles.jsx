import { styled } from 'styled-components'

export const HContainer = styled.header`
    background-color: ${({theme})=>theme.bg};
`

export const HContent = styled.div`
    padding: 1rem;
`

export const HWraper = styled.div`
    display: flex;
    padding: 1px 5px;
    justify-content: space-between;
`

export const Recomended = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const Text = styled.span`
    color: ${({theme})=>theme.color};
    font-family: sans-serif;
    font-size: 12px;
`