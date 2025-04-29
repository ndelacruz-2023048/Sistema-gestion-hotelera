import { styled } from 'styled-components'

export const Label = ({ children }) => {
    return <StyledLabel>{children}</StyledLabel>
}

const StyledLabel = styled.span`
    color: ${({theme})=>theme.color};
    border-radius: 12px;
    font-size: 14px;
    font-weight: 800;
`