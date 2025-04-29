import styled from "styled-components"
import { Btn1 } from "../moleculas/Btn1"
import { DashboardSearchFilters } from "../organismos/DashboardPrincipal/DashboardSearchFilters"
import { EventSection } from "../organismos/EventsHotel/EventsSection"
import { useState } from "react"

import { HotelCard } from "../organismos/DashboardPrincipal/HotelCard"

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
                <Area2 className="area2">
                    <HotelCard/>
                    <HotelCard/>
                    <HotelCard/>
                    <HotelCard/>
                    <HotelCard/>
                    <HotelCard/>
                    <HotelCard/>
                    <HotelCard/>
                    <HotelCard/>
                    <HotelCard/>
                </Area2>
                {/* <Area2>
                    <Btn1 onClick={toggleEventSection}/>
                        {open && <EventSection/>}
                        
                    <Btn1/>
                </Area2> */}
            </MainContent>
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    width: 98%;
    height: 100%;
`

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Area1 = styled.div`
    display: flex;
    height: 8%;
    width: 100%;
    background-color: ${({theme})=>theme.bgd};
    z-index: 10;
    
`
const Area2 = styled.div`
    display:flex;
    flex-wrap:wrap;
    height: 670px;
    width:100%;
    overflow-y: scroll;
    color:white;
    gap: 20px;
    &::-webkit-scrollbar-track {
        background: #f82100;        /* color of the tracking area */
    }   

    &::-webkit-scrollbar-thumb {
        background-color: #0dff00;    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
    }
`