import styled from "styled-components"
import { Button } from "../atomos/Button"
import { RiArrowDownSLine } from "@remixicon/react"
import { useState } from "react"

export const EventDetailForm = ()=> {
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState(-1)
    const buttonName = ['Añadir', 'Applicaciones'];

    return(
        <EventContainer>
            <Header>
                {buttonName.map((name, index)=> (
                    <Button
                        key={name}
                        label={name}
                        active={index === active}
                        onClick={() => setActive(index)}
                    />
                ))}
            </Header>
            <AccionHeader>
            <StatusButton onClick={()=> setOpen(!open)}>
                Finalizada
                <StyledArrow $isOpen={open} size={'18px'}/>
            </StatusButton>
            </AccionHeader>
        </EventContainer>
    )
}

const StyledArrow = styled(RiArrowDownSLine)`
    margin-left: 8px;
    color: #000000;
    transition: transform 0.2s ease; /* Animación suave */
    transform: ${props => (props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`

const StatusButton = styled.button`
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 6px 12px;
    background-color: #00875A;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;

    &:hover {
        background-color: #006644;
    }
`

const EventContainer = styled.div`
    align-items: center;
    margin-bottom: 16px;
`

const AccionHeader = styled.div`

`

const Header = styled.div`
    margin: 0 10px;
`