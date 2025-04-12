import styled from "styled-components"
import { Btn1 } from "../moleculas/Btn1"
import { DashboardSearchFilters } from "../organismos/DashboardPrincipal/DashboardSearchFilters"
import { HotelCard } from "../organismos/DashboardPrincipal/HotelCard"

export const DashboardPrincipalTemplate = () => {
    return(
        <Container>
            <MainContent>
                <Area1>
                    <DashboardSearchFilters/>
                </Area1>
                <Area2>
                    <HotelCard/>
                    <HotelCard/>
                    <HotelCard/>
                    <HotelCard/>
                    <HotelCard/>
                    <HotelCard/>
                    <HotelCard/>
                    <HotelCard/>
                </Area2>
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
    
`
const Area2 = styled.div`
    display:flex;
    justify-content: space-between;
    flex-wrap:wrap;
    height: 85%;
    width:100%;
    overflow-y: scroll;
    background-color: grey;
    color:white;
    gap: 20px;
`