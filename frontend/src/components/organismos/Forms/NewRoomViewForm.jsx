import React, { useCallback, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { PlaceUploadImage } from '../Room/PlaceUploadImage';
import { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { CardRoomImagesAdded } from '../Room/RoomView/CardRoomImagesAdded';
import * as Select from '@radix-ui/react-select';
export const NewRoomViewForm = () => {
  const roomImagesList = [
  ]
  const [countSections, setCountSections] = useState(0)
  const [countSectionLeft, setCountSectionLeft] = useState(0)
  const [countSectionRight, setCountSectionRight] = useState(0)
  const [itemsImagesLeft, setitemsImagesLeft] = useState(0)
  const [itemsImagesRight, setitemsImagesRight] = useState(0)
  const [arrayImages,setArrayImages] = useState(roomImagesList)
  const [disponibilidad, setDisponibilidad] = useState();
  
  const { register,control, formState: { errors } ,setValue} = useFormContext();
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

  useEffect(()=>{
    register("galleryRoomImages",{required:"One image is required"})
  },[register])

  useEffect(() => {
    setValue("galleryRoomImages", arrayImages);
  }, [arrayImages, setValue])
  

  //Codigo de Dropzone 
  const [urlImage,setUrlImage] = useState(null)
  const onDrop = useCallback(acceptedFiles => {
    const imageUrl = URL.createObjectURL(acceptedFiles[0]);
    setUrlImage(imageUrl)
    setArrayImages(prevImages =>{
      const objectImage = {
        variant1:acceptedFiles[0],
        variant2:imageUrl
      }
      const newImages = [...prevImages, objectImage];
      setValue("galleryRoomImages", newImages, { 
          shouldValidate: true,
          shouldDirty: true 
      });
      return newImages;
  });
    
  }, [setValue])
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
                        src={element?.variant2} 
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
                            src={element?.variant2} 
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
          <div className='containerEditImages'>
            <div className='editimagesheader'>
              <h3 className='editimagesheader_title'>Room Images Added</h3>
              <p className='editimagesheader_paragraph'>Select and delete the image that you do not like</p>
            </div>
            <div className='containerCardsRoomImageAdded'>
              {

                arrayImages.map((element,index)=>(
                  <CardRoomImagesAdded image={element?.variant2} itemNumber={index} setArrayImages={setArrayImages} arrayImages={arrayImages}/>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className='roomImageForm'>
        <div className='containerRoomImageForm'>
          <div>
              <form className="formRoomView">
                <h2 className="formTitle">Details room</h2>

                <div className="formSection">
                  <div className='textInputsContainer'>
                    <label className='formSection_label'>Square Meters</label>
                    <span className='spanError'>{errors?.sizeRoom?.message}</span>
                  </div>
                  <input type="number" className="inputText" placeholder="Ej. 30" required {...register("sizeRoom",{required:"Price Room is required"})}/>
                </div>

                <div className="formSection">
                  <div className='textInputsContainer'>
                    <label className='formSection_label'>Bed Types</label>
                    <span className='spanError'>{errors?.bedType?.message}</span>
                  </div>
                  <div className='formSelection'>
                    <Controller
                      name="bedType"
                      control={control}
                      rules={{ required: "Bed Type is required" }}
                      render={({ field }) => (
                    <Select.Root value={field.value}
                    onValueChange={field.onChange}
                    onBlur={field.onBlur} position="popper" >
                      <StyledTrigger className="selectRoomView_selectTrigger">
                        <Select.Value placeholder="Selecciona disponibilidad" />
                      </StyledTrigger>
                      <StyledContent className="selectRoomView_selectContent">
                        <Select.Group className='groupSelect'>
                          <StyledItem value="individual" className="selectRoomView_selectItem">
                            <Select.ItemText>Individual</Select.ItemText>
                          </StyledItem>
                          <StyledItem value="double" className="selectRoomView_selectItem">
                            <Select.ItemText>Double</Select.ItemText>
                          </StyledItem>
                          <StyledItem value="queen" className="selectRoomView_selectItem">
                            <Select.ItemText>Queen</Select.ItemText>
                          </StyledItem>
                          <StyledItem value="king" className="selectRoomView_selectItem">
                            <Select.ItemText>King</Select.ItemText>
                          </StyledItem>
                        </Select.Group> 
                      </StyledContent>
                    </Select.Root>
                      )}
                    />
                  </div>
                </div>

                <div className="formSection">
                  <div className='textInputsContainer'>
                    <label className='formSection_label'>Floor</label>
                    <span className='spanError'>{errors?.floorRoom?.message}</span>
                  </div>
                  <input type="number" className="inputText" placeholder="Ej. 3" {...register("floorRoom",{required:"Floor Room is required"})}/>
                </div>

                <div className="formSection">
                  <div className='textInputsContainer'>
                    <label className='formSection_label'>Price Per Night</label>
                    <span className='spanError'>{errors?.priceRoom?.message}</span>
                  </div>
                  <input type="number" className="inputText" placeholder="Ej. 500" {...register("priceRoom",{required:"Price Room is required"})}/>
                </div>
              </form>
          </div>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80%;
    .roomImage{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
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
        display: flex;
        flex-direction: column;
        height: 48%;
        background-color: white;
        border-radius: 20px;
        .containerEditImages{
          width: 95%;
          height: 92%;
          margin: auto;
          .editimagesheader{
            height: 20%;
            &_title{
              font-size: 16px;
              margin: 0;
            }
            &_paragraph{
              font-size: 14px;
              margin: 0;
              color: #9e9e9e;
            }
          }
          .containerCardsRoomImageAdded{
            display: flex;
            flex-direction: column;
            gap: 15px;
            overflow-y: scroll;
            height: 78%;
          }
        }
      }
    }
    .roomImageForm{
      display: flex;
      width: 48%;
      margin-right: 10px;
      background-color: white;
      border-radius: 20px;
      .containerRoomImageForm{
        width: 95%;
        margin: auto;
        .formRoomView {
          max-width: 600px;
          margin: auto;
          background-color: #fafafa;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

          .formTitle {
            font-size: 28px;
            color: #2e2e2e;
            text-align: center;
            margin-bottom: 2rem;
          }

          .formSection {
            display: flex;
            flex-direction: column;
            margin-bottom: 1.5rem;

            .textInputsContainer{
              display: flex;
              align-items: center;
              gap: 5px;
              margin-bottom: 5px;
            }
            .spanError{
              color: #a78b0e;
              font-weight: 600;
              font-size: 12px;
            }
          .formSelection {
            display: flex;
            justify-content: center;

          }

            &_label {
              font-weight: bold;
              font-size: 14px;
              color: #333;
            }

            .inputText,
            .inputSelect {
              font-size: 15px;
              border: 1px solid #ccc;
              border-radius: 6px;
              background-color: #fff;
              transition: border-color 0.3s;

              &:focus {
                border-color: #e5c100;
                outline: none;
              }
            }
          }
        }
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
    width: 530px;
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
