import { styled } from 'styled-components'

export const Text= ({children})=> {
    return(
        <TextW>{children}</TextW>
    )
}

const TextW = styled.span`
    color: white;
    font-size: 15px;
`