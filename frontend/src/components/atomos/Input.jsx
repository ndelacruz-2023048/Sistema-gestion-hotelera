import { RiSearch2Line } from "@remixicon/react"
import { styled } from 'styled-components'

export const Input = ({ placeholder, type = 'text', icon }) => {
    return (
        <InputWrapper>
        {icon && (
                <IconWrapper>
                    <RiSearch2Line size={20} />
                </IconWrapper>
            )
        }
        <StyledInput
            type={type}
            placeholder={placeholder}
            $hasIcon={icon}
        />
        </InputWrapper>
    )
}

const InputWrapper = styled.div`
    position: relative;
`

const StyledInput = styled.input`
    width: 100%;
    padding: 0.5rem 2rem;
    padding-left: ${props => props.$hasIcon ? '2.5rem' : '1rem'};
    border: none;
    background-color: transparent;
    font-size: 0.875rem;
    color: ${({theme})=>theme.color};

    &:focus {
        outline: none;
    }
`

const IconWrapper = styled.div`
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${({theme})=>theme.color};
`