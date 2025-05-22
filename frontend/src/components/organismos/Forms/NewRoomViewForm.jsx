import React, { useCallback, useState } from 'react'
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { PlaceUploadImage } from '../Room/PlaceUploadImage';
import { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

export const NewRoomViewForm = () => {
  const roomImagesList = [
  ]
  const [countSections, setCountSections] = useState(0)
  const [countSectionLeft, setCountSectionLeft] = useState(0)
  const [countSectionRight, setCountSectionRight] = useState(0)
  const [itemsImagesLeft, setitemsImagesLeft] = useState(0)
  const [itemsImagesRight, setitemsImagesRight] = useState(0)
  const [arrayImages,setArrayImages] = useState(roomImagesList)
  
  const { register, formState: { errors } } = useFormContext();
  useEffect(()=>{
    const extraValue = 1; // Valor adicional que siempre se sumará
    if(arrayImages.length === 0){
      setCountSectionLeft(0)
      setCountSectionRight(100)
    }else if((arrayImages.length + extraValue) > 4){
      let count = arrayImages.length + extraValue
      let num1 = count - 4

      let itemsLeft = arrayImages.length -3 
      setitemsImagesLeft(itemsLeft)
      setitemsImagesRight(3)
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
        let itemsRight = arrayImages.length -1
        setitemsImagesRight(itemsRight)
        setitemsImagesLeft(1)
        setCountSectionRight(50)

      }else{
        setCountSectionRight(100)
        setitemsImagesLeft(1)
        setitemsImagesRight(1)
      }
    }
  },[arrayImages])

  //Codigo de Dropzone 
  const [urlImage,setUrlImage] = useState(null)
  const onDrop = useCallback(acceptedFiles => {
    const imageUrl = URL.createObjectURL(acceptedFiles[0]);
    setUrlImage(imageUrl)
    setArrayImages(prevImages => [...prevImages, imageUrl])
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  
  return (
    <Container percentajeImageLeft={countSectionLeft} percentajeImageRight={countSectionRight}>
      <div className='roomImage'>
        <div className='showImages'>
          <div className='containerShowImages'>
            {arrayImages.length === 0 ? (
               <PlaceUploadImage percetageSize={countSectionRight} {...getRootProps({className: 'dropzone'})}>
               <input {...getInputProps()}/>
               </PlaceUploadImage>
            ):(
              <>
              <div className='showImages_section1'>
                  {arrayImages
                    .slice(0, itemsImagesLeft)
                    .map((element, index) => (
                      <img 
                        key={`principal-${index}`}
                        className='imageRoomPrincipal' 
                        src={element} 
                        alt={`Imagen principal ${index + 1}`} 
                      />
                    ))
                  }
                </div>
                <div className='showImages_section2'>
                  {arrayImages.length === 1 ? (
                    <PlaceUploadImage percetageSize={countSectionRight} {...getRootProps({className: 'dropzone'})}>
                    <input {...getInputProps()}/>
                    </PlaceUploadImage>
                  ) : (
                    <>
                      {arrayImages
                        .slice(-itemsImagesRight)
                        .map((element, index) => (
                          <img 
                            key={`small-${index}`}
                            className='imageRoomSmall' 
                            src={element} 
                            alt={`Imagen pequeña ${index + 1}`} 
                          />
                        ))
                      }

                <PlaceUploadImage percetageSize={countSectionRight} {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()}/>
                </PlaceUploadImage>
                  </>
                )}

              </div>  
              </>
            )}
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
          flex-wrap: wrap;
          width: 50%;
          height: 100%;
          .imageRoomPrincipal{
            width: ${props => props.percentajeImageLeft}%;
            height: ${props => props.percentajeImageLeft}%;
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
            width:${props => props.percentajeImageRight}%;
            height:${props => props.percentajeImageRight}%;
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
