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
/* 
width: 100%;
    height: 55px;
    margin: 15px 0;
    border: none;
    color: #000000;
    border-radius: 50px;
    text-decoration: none;
    font-size: 16px;
    background: rgba(255, 255, 255, 0.2);
    outline: none;
    backdrop-filter: blur(10px);
    &::placeholder {
        color: white;
        font-size: 15px;
        padding: 0 15px;
    } */