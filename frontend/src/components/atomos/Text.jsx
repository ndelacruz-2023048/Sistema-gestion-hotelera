import { styled } from 'styled-components'

export const Text= ({children})=> {
    return(
        <TextW>{children}</TextW>
    )
}

const TextW = styled.span`
    color: ${({theme})=>theme.color};
    font-size: 15px;
`