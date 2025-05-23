import React from 'react'
import styled from 'styled-components'
import * as Select from '@radix-ui/react-select';
import { useHotelStore } from '../../../store/HotelStore';
import { useRoomStore } from '../../../store/RoomsStore';
export const ModalSelectHotel = () => {
    const {hotels} = useHotelStore()
    const {setHotelId} = useRoomStore()

    const handleChangeHotelSelect =(value)=>{
        console.log(value);
        setHotelId(value)
    }

  return (
    <Container>
        <div className='mainmodal'>
            <div>
                <h1 className='mainmodal_title'>Select Hotel</h1>
            </div>
            <div>
                <p className='mainmodal_description'>Please select a hotel to create a new room</p>
            </div>
            <div>
                <Select.Root position="popper" onValueChange={handleChangeHotelSelect}>
                    <StyledTrigger className="selectRoomView_selectTrigger">
                    <Select.Value placeholder="Selecciona disponibilidad" />
                    </StyledTrigger>
                    <StyledContent className="selectRoomView_selectContent">
                    <Select.Group className='groupSelect'>
                        {
                            hotels?.hotels.map((e)=>(
                                <StyledItem value={e?._id} className="selectRoomView_selectItem">
                                    <Select.ItemText>{e?.name}</Select.ItemText>
                                </StyledItem>
                            ))
                        }
                    </Select.Group> 
                    </StyledContent>
                </Select.Root>
            </div>
        </div>
    </Container>
  )
}

const Container = styled.div`
    position: fixed;
    backdrop-filter: blur(20px);
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    .mainmodal{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: aliceblue;
        width: 45%;
        height: 30%;
        margin: auto;
        border-radius: 20px;
        &_title{
            margin: 0;
        }
        &_description{
            margin: 0;
        }
    }
`

const StyledTrigger = styled(Select.Trigger)`
  all: unset;
  background-color: #f1f1f1;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  color: #333;
  width: 100%;
  margin-bottom: 0;
  border: 1px solid #ccc;
 
  &:hover {
    background-color: #eaeaea;
  }
`;
 
const StyledContent = styled(Select.Content)`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 10px 38px -10px rgba(22,23,24,0.35), 0px 10px 20px -15px rgba(22,23,24,0.2);
  z-index: 999;
  top: 10px;
  .groupSelect{
    width: 200px;
  }
`
 
const StyledItem = styled(Select.Item)`
  font-size: 14px;
  line-height: 1;
  color: #333;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 8px 10px;
  user-select: none;
  cursor: pointer;
 
  &:hover {
    background-color: #f0f0f0;
  }
 
  &[data-highlighted] {
    background-color: #e1e1e1;
  }
`
