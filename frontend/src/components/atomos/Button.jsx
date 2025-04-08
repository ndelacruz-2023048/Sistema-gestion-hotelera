import styled from "styled-components"

export const Button = ({ label, active, onClick }) => {
    return (
        <StyledButton $active={active} onClick={onClick}>
            {label}
        </StyledButton>
    )
}


const StyledButton = styled.button`
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
    transition: background-color 0.2s;
    color: ${({ theme, $active }) => $active ? 'white' : theme.color};
    background-color: ${({theme})=>theme.bgd};
    ${props => props.$active ? `
    background-color: #a88f68;
    color: white;
  ` : `
    &:hover {
      background-color: #a88f68;
    }
  `}
`


