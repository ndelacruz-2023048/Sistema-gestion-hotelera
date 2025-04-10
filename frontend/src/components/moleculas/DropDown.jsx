import { useState } from "react"
import { Icons } from "../atomos/Icon"
import { Text } from "../atomos/Text"
import { styled } from 'styled-components'
import { RiArrowDownSLine } from "@remixicon/react"

export const Dropdown = ({ icon, label, options, onSelect }) => {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(label)

    const handleSelect = (option) => {
        setSelected(option)
        onSelect(option)
        setOpen(false)
    }
    return(
        <DropdownWrapper onClick={()=> setOpen(!open)}>
            <DropdownHeader>
                {icon && <Icons icon={icon}/>}
                <Text>{selected}</Text>
                <StyledArrow $isOpen={open} size={'18px'}/>
            </DropdownHeader>
            <DropdownContent open={open}>
                {options.map((option, index)=> (
                    <DropdownItem key={index} onClick={()=> handleSelect(option)}>
                        {option}
                    </DropdownItem>
                ))}
            </DropdownContent>
        </DropdownWrapper>
    )
}


const DropdownWrapper = styled.div`
    position: relative;
    display: inline-block;
    background: ${({theme})=>theme.btn};
    padding: 10px 15px;
    border-radius: 50px;
    cursor: pointer;
    width: 200px;
    height: 20px;
`

const DropdownHeader = styled.div`
    display: flex;
    justify-content: space-between;
`
const DropdownContent = styled.div`
    position: absolute;
    top: 55px;
    left: 0;
    width: 100%;
    background: ${({theme})=>theme.ddw};
    border-radius: 8px;
    overflow: hidden;
    display: ${({ open }) => (open ? "block" : "none")};
`

const DropdownItem = styled.div`
    padding: 10px;
    color: white;
    cursor: pointer;
    &:hover {
        background: ${({theme})=>theme.bg};
    }
`

const StyledArrow = styled(RiArrowDownSLine)`
    margin-left: 8px;
    color: #474d61;
    transition: transform 0.2s ease; /* Animación suave */
    transform: ${props => (props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`