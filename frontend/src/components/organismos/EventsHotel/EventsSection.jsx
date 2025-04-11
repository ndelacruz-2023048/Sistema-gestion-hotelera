import { styled } from "styled-components"
import { EventDetailForm } from "../../moleculas/EventDetails"
import { Details } from "../Details"

export const EventSection = () => {

    return(
        <EventContainer>
            <TitleContainer>
                <Title>Page 404</Title>
            </TitleContainer>
            <EventDetailForm/>
            <Details/>
        </EventContainer>
    )
}

const EventContainer = styled.div`
    background: ${({theme})=>theme.bgd};
    width: 25rem;
    height: auto;
    border: 1px solid rgba(255, 255, 255, 0.2);
`

const TitleContainer = styled.div`
    height: 25px;
    margin: 10px 0;
`

const Title = styled.span`
    font-family: sans-serif;
    font-size: 20px;
    color: ${({theme})=>theme.color};
`