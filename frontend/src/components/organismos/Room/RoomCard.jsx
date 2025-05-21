import React from 'react'
import styled from 'styled-components'

export const RoomCard = () => {
  return (
    <Container>
        <div className='containercentered'>
            <div className='imageRoom'>
                <img className='imageRoom_image' src="https://res.cloudinary.com/dtmwybty7/image/upload/v1747510077/pexels-alexander-f-ungerer-157458816-21768110_wkoqc2.jpg" alt="" />
                <span className='imageRoom_typeRoom'>Premium</span>
            </div>
            <div className='detailRoom'>
                <span className='detailRoom_price'>$1500</span>
                <p className='detailRoom_title'>Habitation King</p>
                <div className='confortables'>
                    <span>Muebles</span>
                    <span>Tecnologia</span>
                    <span>Cocina</span>
                </div>
                <div className='specificdescription'>
                    <span>2 niños beds</span>
                    <span>3 adultos baths</span>
                    <span>1800 m</span>
                </div>
            </div>
        </div>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 200px;
    background-color: white;
    border-radius: 20px;
    .containercentered{
        width: 92%;
        height: 92%;
    }
    .imageRoom{
        display: flex;
        height: 60%;
        position: relative;
        &_image{
            object-fit: cover;
            border-radius: 20px;
            width: 100%;
            height: 100%;
        }
        &_typeRoom{
            position: absolute;
            top: 5%;
            left: 6%;
            backdrop-filter: blur(5px);
            color: white;
            font-weight: 300;
            padding: 8px 15px;
            border-radius: 20px;
        }
    }

    .detailRoom{
        display: flex;
        flex-direction: column;
        height: 40%;
        .confortables{
            display: flex;
            gap: 5px;
        }
        .specificdescription{
            display: flex;
            gap: 5px;
        }
        &_title{
            margin: 0;
        }
    }
`
