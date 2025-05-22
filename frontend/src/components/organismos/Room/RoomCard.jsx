import React from 'react'
import styled from 'styled-components'

export const RoomCard = () => {
  return (
    <Container>
        <div className='card'>
            <div className='imageContainer'>
            <img
                    className='roomImage'
                    src='https://res.cloudinary.com/dtmwybty7/image/upload/v1747510077/pexels-alexander-f-ungerer-157458816-21768110_wkoqc2.jpg'
                    alt='Room'
                />
                <span className='badge'>Furnished</span>
            </div>
                <div className='roomDetails'>
                <h3 className='price'>$1,500 /month</h3>
                <p className='info'>2 niños beds · 3 adultos baths · 1800 m²</p>
                <p className='location'>Zona 10, Ciudad de Guatemala</p>
            </div>
        </div>
</Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Para que quede pegado arriba */
  background-color: #d3d1d1;
  padding-top: 10px; /* Puedes bajarlo a 10px si lo quieres más arriba */

  .card {
    width: 320px;
    background-color: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
    width: 500px;  /* Aquí podrías aumentar este valor para hacerlo más ancho */
    height: 300px;
  }

  .imageContainer {
    position: relative;
    height: 180px;
    padding: 10px; /* Espacio para el borde blanco */
    background-color: white; /* Borde blanco */
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  .roomImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  .badge {
    position: absolute;
    top: 18px;
    left: 18px;
    background-color: white;
    color: #444;
    font-size: 12px;
    padding: 6px 12px;
    border-radius: 8px;
    font-weight: 500;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .roomDetails {
    padding: 16px;
  }

  .price {
    font-size: 20px;
    font-weight: 700;
    color: #222;
    margin: 0;
  }

  .info {
    color: #666;
    margin: 6px 0;
    font-size: 14px;
  }

  .location {
    color: #999;
    font-size: 13px;
  }
`