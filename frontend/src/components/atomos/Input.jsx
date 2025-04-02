import { InputWrapper, IconWrapper, StyledInput } from '../../styles/InputStyle'
import { RiSearch2Line } from "@remixicon/react"

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