import { styled } from 'styled-components'

export const Label = ({ children }) => {
    return <StyledLabel>{children}</StyledLabel>
}

const StyledLabel = styled.span`
    background-color: #e1d5ff;
    color: #5e4db2;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
`