import React, { useState } from 'react'
import RoomPrincipal from "../../../assets/RoomPrincipal.jpg"
import styled from 'styled-components'
import { Icon } from '@iconify/react/dist/iconify.js'

export const Room = ({isSelected,onClick,isDetailRoomActive,name,image}) => {
    
  return (
    <Container onClick={onClick} className={isSelected?"active":""}>
        <img src={image[0]?.images[0]} alt="" className={isDetailRoomActive ?'image active':'image'}/> 
        <section className='room'>
            <h3 className='room_title'>{name}</h3>
            <div className='sectiondescription'>
                <div className='flag'>
                    <Icon icon="fluent:device-meeting-room-32-regular" className='icon'/>
                    <p className='text'>4 Available</p>
                </div>
                <div className='flag'>
                    <Icon icon="mdi:social-distance-2-meters" className='icon'/>
                    <p className='text'>25m</p>
                </div>
            </div>
            <div className='sectionscosts'>
                <div className='rating'>
                    <Icon icon="mdi:star" className='rating_icon'/>
                    <p className='rating_text'>4.5</p>
                </div>
                <p className='cost'><span className='cost_number'>$1500</span>/per night</p>
            </div>
        </section>
    </Container>
  )
}

const Container = styled.div`
   display: flex;
   gap: 8px;
   border-radius: 10px;
   width:100%;
   height: 120px;
   &.active{
    background-color: ${({theme})=>theme.bgRoomHotel};
   }
   .room{
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    &_title{
     font-size: 20px;
     margin: 0;
     color:${({theme})=>theme.text}
    }
   }
  .image{
    width: 20%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    &.active {
        width: 30%;
    }
  }
  .sectiondescription{
    display: flex;
    gap: 5px;
    .flag{
        display: flex;
        background-color: ${({theme})=>theme.toggleIcon};
        padding: 4px 6px;
        border-radius: 10px;
        gap: 5px;
        .icon{
            font-size: 18px;
            color:${({theme})=>theme.eSection}
        }
        .text{
            font-size: 14px;
            margin: 0;
            color:${({theme})=>theme.eSection}
        }
    }
  }

  .sectionscosts{
    display: flex;
    gap: 10px;
    .rating{
        display: flex;
        align-items: center;
        &_icon{
            font-size: 20px;
            color:${({theme})=>theme.text};
            color: #e9be00;
        }
        &_text{
            font-size: 16px;
            margin: 0;
            color:${({theme})=>theme.text};
            margin:0px;
        }
    }
    .cost{
        font-size: 14px;
        margin: 0;
        color:${({theme})=>theme.divider2};
        font-size: 15px;
        font-weight: 500;
        &_number{
            color: ${({theme})=>theme.toggleIcon};
            font-size: 20px;
            font-weight: 600;
        }
    }
  }
`