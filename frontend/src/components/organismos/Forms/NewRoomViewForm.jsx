import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { PlaceUploadImage } from '../Room/PlaceUploadImage';
import { useEffect } from 'react';

export const NewRoomViewForm = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2021/06/01/12/39/beach-6301597_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/06/14/21/15/bedroom-3475656_1280.jpg",
      "https://cdn.pixabay.com/photo/2021/06/01/12/39/beach-6301597_1280.jpg",
      "https://cdn.pixabay.com/photo/2021/06/01/12/39/beach-6301597_1280.jpg",
  ]
  const [countSections, setCountSections] = useState(0)
  const [countSectionLeft, setCountSectionLeft] = useState(0)
  const [countSectionRight, setCountSectionRight] = useState(0)
  const [arrayImages,setArrayImages] = useState(images)
  
  const { register, formState: { errors } } = useFormContext();
  useEffect(()=>{
    const extraValue = 1; // Valor adicional que siempre se sumará
    if(arrayImages.length === 0){
      setCountSectionLeft(0)
      setCountSectionRight(0)
    }else if((arrayImages.length + extraValue) > 4){
      let count = arrayImages.length + extraValue
      let num1 = count - 4
      if(num1>=2){
        setCountSectionLeft(50)
      }else{
        setCountSectionLeft(100)
      }
      setCountSectionRight(50)
    }else{
      let count = arrayImages.length + extraValue
      setCountSectionLeft(100)
      if((count-1)>=2){
        setCountSectionRight(50)
      }else{
        setCountSectionRight(100)
      }
    }
  },[arrayImages])
  
  console.log("Imagenes izquierda",countSectionLeft);
  console.log("Imagenes derecha",countSectionRight);
  
  return (
    <Container>
      <div className='roomImage'>
        <div className='showImages'>
          <div className='containerShowImages'>
            <div className='showImages_section1'>
              <img className='imageRoomPrincipal' src="https://cdn.pixabay.com/photo/2013/04/02/20/17/riu-99533_1280.jpg" alt="" />
            </div>
            <div className='showImages_section2'>
              <img className='imageRoomSmall' src="https://cdn.pixabay.com/photo/2017/01/28/19/31/landscape-2016308_1280.jpg" alt="" />
              <img className='imageRoomSmall' src="https://cdn.pixabay.com/photo/2017/01/28/19/31/landscape-2016308_1280.jpg" alt="" />

            </div>
          </div>
        </div>
        <div className='editImages'>

        </div>
      </div>
      <div className='roomImageForm'>

      </div>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    height: 80%;
    .roomImage{
      display: flex;
      flex-direction: column;
      width: 50%;
      .showImages{
        display: flex;
        height: 50%;
        gap: 15px;
        background-color: white;
        border-radius: 20px;
        .containerShowImages{
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          width: 95%;
          height: 92%;
          margin: auto;
        }
        &_section1{
          display: flex;
          width: 50%;
          height: 100%;
          .imageRoomPrincipal{
            width: 100%;
            height: 100%;
            border-radius: 20px;
          }
        }
        &_section2{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          width: 50%;
          height: 100%;
          .imageRoomSmall{
            border-radius: 20px;
            width:50%;
            height:50%;
          }
        }
      }
      .editImages{
        height: 50%;
      }
    }
    .roomImageForm{
      width: 50%;
      background-color: purple;
    }
`
