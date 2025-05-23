import styled from "styled-components"
import { RoomsDetail } from "../organismos/DetailHotel/RoomsDetail"
import { DetailsAndDescriptions } from "../organismos/DetailHotel/DetailsAndDescriptions"
import { AdvanceBooking } from "../organismos/DetailHotel/AdvanceBookingInfo"
import { HotelView } from "../organismos/DetailHotel/HotelView"
import { useState } from "react"
import { Room } from "../organismos/DetailHotel/Room"
import { useRoomStore } from "../../store/RoomsStore"
import { SyncLoader } from "react-spinners"
import { useQuery } from "@tanstack/react-query"

export const DetailHotelTemplate = () => {
  const [isDetailRoomActive, setisDetailRoomActive] = useState(false)
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const {roomsByHotel,fetchRoomsById} = useRoomStore()

  console.log(roomsByHotel.room);
  

  const [selectedId, setSelectedId] = useState(null);
  const {isLoading,data} = useQuery({queryKey:['roomById',selectedId],queryFn:()=>fetchRoomsById(selectedId), enabled: !!selectedId})
    const handleClickRoomDetail = (index,id)=>{
      setSelectedRoomId(index);
      setisDetailRoomActive(true)
      setSelectedId(id)
    }
    return (
        <Container>
            <MainContent>
                <Area1 className={isDetailRoomActive?"active":""}>
                <div className="sectioncentered">
                  <h3 className="sectioncentered_title">Vista Hermosa</h3>
                  <div className="sectioncentered_rooms">
                    {
                      roomsByHotel.room?.map((e,index)=>(
                        <Room name={e.nameOfTheRoom} image={e.views} isDetailRoomActive={isDetailRoomActive} isSelected={selectedRoomId===index}
                        aviable={e?.views[0]?.available? "Available" : "Not Available" } SquateMeters={e?.views[0]?.squareMeters} price={e?.views[0]?.pricePerNight?.$numberDecimal}
                        onClick={()=>handleClickRoomDetail(index,e._id)}/>
                      ))
                    }
                  </div>
                </div>
                </Area1>
                <Area2 className={isDetailRoomActive?"active":""}>
                    {
                      isLoading?<SyncLoader/>:(
                        <RoomsDetail data={data}/>
                      )
                    }
                </Area2>    
            </MainContent>
        </Container>
      )
    }
    
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 98%;
  background-color: ${({theme})=>theme.colorBackground};
  border-radius: 20px;
`


const MainContent = styled.div`
    display: flex;
    justify-content: space-between;
    height: 95%;
    width: 98%;
`

const Area1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: all 0.5s ease-in-out;
  border-radius: 20px;
  border: 1px solid #b4b4b4;
  .sectioncentered{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 95%;
    height: 95%;
    &_title{
      font-size: 28px;
      margin: 0;
      color:${({theme})=>theme.text};
      margin-left: 10px;
    }
    &_rooms{
      display: flex;
      flex-direction: column;
      gap: 20px;
      height: 600px;
      overflow-y: scroll;
    }
  }
  &.active{
    transition: all 0.2s ease-in-out;
    width: 40%;
  }
`


const Area2 = styled.div`
  display: none;
  height:100%;
  width: 0%;
  transition: all 0.2s ease-in-out;
  &.active{
    transition: all 0.2s ease-in-out;
    width: 58%;
    display: flex;
  }
  `


