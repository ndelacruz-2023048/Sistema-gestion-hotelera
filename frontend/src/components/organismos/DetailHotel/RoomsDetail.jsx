import { Icon } from "@iconify/react/dist/iconify.js"
import styled from "styled-components"
import { BtnDetail } from "../../moleculas/BtnDetail"
import { HotelView } from "./HotelView"

export const RoomsDetail = ({data}) => {
    return(
        <Container>
            <HotelView dataHotelView={data?.room?.views}/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    height: 87%;
    background: ${({theme})=>theme.bgdgradient};
    width: 100%;
    border-radius: 20px;
`

const Title = styled.h2`
    margin: 0;
    color: ${({theme})=>theme.color};
`

const SectionGlobal = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    width: 100%;
    height: 90%;
`

const Section = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    width: 90%;

`

const Section1 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
    .infoIcon{
        column-gap: 16px;
        font-size: 35px;
    }
`

const ContainerButtonDetail = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`

const Line = styled.div`
    height: 2px;
    width: 100%;
    background-color: ${({theme})=>theme.bgd};
    justify-content: center;
`


