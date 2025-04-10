import { Dropdown } from "../moleculas/DropDown"
import { RiMapPinLine, RiCalendar2Fill, RiGroupLine } from "@remixicon/react"
import { styled } from 'styled-components'

export const SelectMenu = ()=> {
    return(
        <SelectContainer>
            <Dropdown 
                icon={<RiMapPinLine size={20}/>}
                label={'Spain, Madrid'}
                options={['Spain, Madrid', 'Guatemala, Guatemala', 'Italy, Monza']}
                onSelect={(value) => (value)}
            />
            <Dropdown 
                icon={<RiCalendar2Fill size={20}/>}
                label={'24 - 28 July'}
                options={['25 - 30 March', '24 - 28 July', '18 - 20 May']} 
                onSelect={(value) => (value)}
            />
            <Dropdown 
                icon={<RiGroupLine size={20}/>}
                label={'1 Guest'}
                options={['1 Guest', '2 Guest', '3 Guest']} 
                onSelect={(value) => (value)}
            />
        </SelectContainer>
    )
}

const SelectContainer = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
`