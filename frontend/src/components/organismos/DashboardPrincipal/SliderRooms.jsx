import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';
import styled from 'styled-components';
import { Icon } from '@iconify/react/dist/iconify.js';

export const SliderRooms = ({roomsData,onEventClick}) => {

  const handleClickSlider = (id)=>{
    onEventClick(id)
  }

  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {
            roomsData?.map((room,index)=>(
                <SwiperSlide onClick={()=>handleClickSlider(room?._id)}><Slide> <button className='btn'><Icon icon="fluent:conference-room-24-regular" className='icon'/> {room.typeRoom}</button></Slide></SwiperSlide>
            ))
}
      </Swiper>
  )
}

const Slide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .btn{
        display: flex;
        align-items: center;
        gap: 10px;
        background-color: #00000044;
        color: white;
        font-size: 17px;
        padding: 10px 15px;
        border-radius: 20px;
        &:hover{
            background-color: #00000066;
        }
        .icon{
            font-size: 28px;
        }
    }
`