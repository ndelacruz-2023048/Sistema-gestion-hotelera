import styled from "styled-components"
import { Btn1 } from "../moleculas/Btn1"
import { DashboardSearchFilters } from "../organismos/DashboardPrincipal/DashboardSearchFilters"
import { EventSection } from "../organismos/EventsHotel/EventsSection"
import { useState } from "react"

import { HotelCard } from "../organismos/DashboardPrincipal/HotelCard"
import { useHotelStore } from "../../store/HotelStore"
import { LottieAnimacion } from "../atomos/LottieAnimacion"
import animationhotel from "../../assets/animationhotel.json"
import { useNavigate } from "react-router"
export const DashboardPrincipalTemplate = () => {
    const [open, setOpen] = useState(false)
    const {hotels} = useHotelStore()
    const toggleEventSection = ()=> {
        setOpen(!open)
    }
    console.log(hotels?.hotels);
    const navigation = useNavigate()
    const handleRoomClick = (id)=>{
        navigation(`/hotel/${id}`)
    }

    
    return(
        <Container>
            <MainContent>
                <Area1>
                    <DashboardSearchFilters/>
                </Area1>
                <Area2 className="area2">
                {
                  hotels?.hotels?.length >0?(
                      hotels?.hotels?.map((e)=>(
                          <HotelCard id={e._id} imageHotel={e.image} nameHotel={e.name} addressHotel={e.address} priceHotel={e.price} onEventClick={handleRoomClick}/>
                      )) 
                    ):
                    <div className="container_animation">
                        <LottieAnimacion alto={205} ancho={205} animacion={animationhotel}/>
                        <p className="container_animation_title">No Hotels Found</p>
                    </div>
                }
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
    .container_animation{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        &_title{
            color: ${({theme})=>theme.text};
            font-weight: 600;
        }
    }
`