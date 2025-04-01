import { styled } from 'styled-components'

export const StyledButton = styled.button`
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
    transition: background-color 0.2s;
    
    ${props => (props.active ? `
        background-color: #5c7bfc;
        color: white;
    ` : `
        background-color: #1f2539;
        color:rgb(255, 255, 255);
        &:hover {
        background-color: #5c7bfc;
        }
    `)}
`