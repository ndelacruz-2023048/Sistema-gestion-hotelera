import { Dropdown } from "../moleculas/DropDown"
import { SelectContainer } from "../../styles/SelectMenuStyle"
import { RiMapPinLine, RiCalendar2Fill, RiGroupLine } from "@remixicon/react"

export const SelectMenu = ()=> {
    return(
        <SelectContainer>
            <Dropdown 
                icon={<RiMapPinLine/>}
                label={'Spain, Madrid'}
                options={['Spain, Madrid', 'Guatemala, Guatemala', 'Italy, Monza']}
                onSelect={(value) => (value)}
            />
            <Dropdown 
                icon={<RiCalendar2Fill/>}
                label={'24 - 28 July'}
                options={['25 - 30 March', '24 - 28 July', '18 - 20 May']} 
                onSelect={(value) => (value)}
            />
            <Dropdown 
                icon={<RiGroupLine/>}
                label={'1 Guest'}
                options={['1 Guest', '2 Guest', '3 Guest']} 
                onSelect={(value) => (value)}
            />
        </SelectContainer>
    )
}