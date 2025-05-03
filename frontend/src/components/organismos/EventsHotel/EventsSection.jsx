import { styled } from "styled-components"
import { EventDetailForm } from "../../moleculas/EventDetails"
import { Details } from "../Details"
import { Auto } from "../Automatizacion"
import { TicketHeader } from "../HeaderEventSection"

export const EventSection = () => {

    return(
        <EventContainer>
            <TicketHeader/>
            <TitleContainer>
                <Title>Page 404</Title>
            </TitleContainer>
            <EventDetailForm/>
            <Details/>
            <Auto/>
        </EventContainer>
    )
}

const EventContainer = styled.div`
    background: ${({theme})=>theme.bgEvents};
    width: 25rem;
    height: auto;
`

const TitleContainer = styled.div`
    height: 25px;
    margin: 30px 0;
`

const Title = styled.span`
    font-family: sans-serif;
    font-size: 30px;
    color: ${({theme})=>theme.color};
`