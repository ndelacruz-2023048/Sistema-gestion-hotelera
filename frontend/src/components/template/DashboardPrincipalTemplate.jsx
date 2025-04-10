import styled from "styled-components"
import { Btn1 } from "../moleculas/Btn1"
import { DashboardSearchFilters } from "../organismos/DashboardPrincipal/DashboardSearchFilters"
import { EventSection } from "../organismos/EventsHotel/EventsSection"
import { useState } from "react"


export const DashboardPrincipalTemplate = () => {
    const [open, setOpen] = useState(false)

    const toggleEventSection = ()=> {
        setOpen(!open)
    }

    return(
        <Container>
            <MainContent>
                <Area1>
                    <DashboardSearchFilters/>
                </Area1>
                <Area2>
                    <Btn1 onClick={toggleEventSection}/>
                        {open && <EventSection/>}
                        
                    <Btn1/>
                </Area2>
            </MainContent>
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const MainContent = styled.div`
    display: grid;
    grid-template-areas: 
        "area1 area1 area1"
        "area2 area2 area2";
    grid-template-columns: 1fr 1fr;
    gap: 10px;
`

const Area1 = styled.div`
    grid-area: area1;
    background-color: ${({theme})=>theme.bgd};
    color:white; 
    flex-direction: column;
`
const Area2 = styled.div`
    grid-area: area2;
    background-color: #b700ff;
    color:white;
`
const Area3 = styled.div`
    grid-area: area3;
    background-color: #00ffa6;
    color:white;
`
