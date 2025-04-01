import { styled } from 'styled-components'

export const InputWrapper = styled.div`
    position: relative;
`

export const StyledInput = styled.input`
    width: 100%;
    padding: 0.5rem 2rem;
    padding-left: ${props => props.$hasIcon ? '2.5rem' : '1rem'};
    border: none;
    background-color: transparent;
    font-size: 0.875rem;
    color: white;

    &:focus {
        outline: none;
    }
`

export const IconWrapper = styled.div`
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color:rgb(190, 196, 206);
`