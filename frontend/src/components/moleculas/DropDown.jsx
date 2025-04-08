import { useState } from "react"
import { DropdownContent, DropdownHeader, DropdownItem, DropdownWrapper, StyledArrow } from "../../styles/DropDownStyle"
import { Icons } from "../atomos/Icon"
import { Text } from "../atomos/Text"

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