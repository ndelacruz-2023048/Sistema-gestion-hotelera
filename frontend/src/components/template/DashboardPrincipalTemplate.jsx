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
                    <HotelCard urlSebas='mdi:account-cowboy-hat-outline'/>
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
    background-color: grey;
    color:white;
`
const Area3 = styled.div`
    grid-area: area3;
    background-color: #00ffa6;
    color:white;
`
