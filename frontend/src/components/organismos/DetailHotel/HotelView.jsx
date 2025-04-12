import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import { useState } from 'react';
import RoomPrincipal from '../../../assets/RoomPrincipal.jpg'
import Comedor from '../../../assets/Comedor.jpg'
import Cama from '../../../assets/Cama.jpg'
import Sala from '../../../assets/sala.jpg'
import { Icon } from '@iconify/react/dist/iconify.js';
export const HotelView = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <Container>
            <RoomBadges>
                <ContainBadgeIcon>
                    <Icon icon="gis:measure-area-alt" className='icon'/>
                    <Badges>400 sq.ft</Badges>
                </ContainBadgeIcon>
                <ContainBadgeIcon>
                    <Icon icon="lucide:bed-single" className='icon'/>
                    <Badges>dabble</Badges>
                </ContainBadgeIcon>
                <ContainBadgeIcon>
                <Icon icon="ri:stack-fill" className='icon'/>
                    <Badges>3rd floor</Badges>
                </ContainBadgeIcon>
            </RoomBadges>
        <Main>
             <Swiper
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper,multipleActiveThumbs: true}}
            modules={[FreeMode, Navigation, Thumbs]}
            className='swiper-personalized'
            >
                <SwiperSlide className='swiper-slide-personalized'><Image src={RoomPrincipal} alt="" /></SwiperSlide>
                <SwiperSlide className='swiper-slide-personalized'><Image src={Comedor} alt="" /></SwiperSlide>
                <SwiperSlide className='swiper-slide-personalized'><Image src={Cama} alt="" /></SwiperSlide>
                <SwiperSlide className='swiper-slide-personalized'><Image src={Sala} alt="" /></SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                watchSlidesProgress
                className='container-swiper-controls'
                style={{position:'initial'}}
                >
                <SwiperSlide className='swiper-controls'><MiniImage src={RoomPrincipal} alt="" /></SwiperSlide>
                <SwiperSlide className='swiper-controls'><MiniImage src={Comedor} alt="" /></SwiperSlide>
                <SwiperSlide className='swiper-controls'><MiniImage src={Cama} alt="" /></SwiperSlide>
                <SwiperSlide className='swiper-controls'><MiniImage src={Sala} alt="" /></SwiperSlide>
            </Swiper>
        </Main>
        </Container>
        
    )
}
const Container = styled.div`
    position: relative;
    width: 60%;
`


const Main = styled.div`
    position: relative;

    .swiper-personalized .swiper-wrapper{
        width: 500px;
        height: 400px;/* Aqui podes cambiar el tamaño de la imagen grande o de las imagenes*/
    }
    
    .container-swiper-controls{
        display: flex;
        flex-direction: column;
        width: 40%;
    }

    .container-swiper-controls .swiper-wrapper{
        position: absolute;
        bottom: 3%;
        left: 2%;
        height: 19%;
        /*Si quieres modificar la lista de imagenes vertial u horizontal, aqui debes de hacerlo*/
    }
    

    .swiper-slide-thumb-active::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 103.5%;
        height: 103.7%;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 15px;
    }

`

const Image = styled.img`
    object-fit: cover;
    width: 98%;
    height: 100%;
    border-radius: 20px;
`

const MiniImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    border: 2px solid #ffffff;
    border-radius: 15px;
`

const RoomBadges = styled.div`
    position: absolute;
    display: flex;
    gap: 10px;
    top: 3%;
    right: 3%;
    z-index: 100;
`

const ContainBadgeIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background-color: #fff;
    padding: 8px 15px;
    border-radius: 15px;
    .icon{
        font-size: 25px;
    }
    
`

const Badges = styled.span`
    color: #000;
`