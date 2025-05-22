import styled from "styled-components";
import React, { useCallback, useState } from "react";
import { TextField, MenuItem, Button as MuiButton } from "@mui/material";
import {NavLink,useNavigate } from "react-router-dom";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { SlArrowLeftCircle } from "react-icons/sl";
import { GoArrowRight } from "react-icons/go";
import {Icon} from '@iconify/react'
import { ButtonHome } from "../../atomos/ButtonHome";
import { useForm } from "react-hook-form";
import {useDropzone} from 'react-dropzone'
import { UploadImage } from "../UploadImage/UploadImage";
import { UploadImageSucces } from "../UploadImage/UploadImageSuccess";
import { useSaveImage } from "../../../hooks/SaveImage";
import { useRoomStore } from "../../../store/RoomsStore";


export const NewHotelForm = ({register,errors}) => {


  ///Codigo para subir una imagen
  const {dataImage,isLoadingImage,registerImage} = useSaveImage()

  //Estados para subir imagenes
  const {dataFileImageHotel,setDataFileImageHotel} = useRoomStore()
  const [urlImage,setUrlImage] = useState(null)/*State para URL IMAGEN */
  const [isInteractionDisabled, setIsInteractionDisabled] = useState(false)/*State para deshabilitar botones e inputs cuando algo se este subiendo o guardando */

  const onDrop = useCallback(acceptedFiles => {
    setDataFileImageHotel(acceptedFiles[0])
    const imageUrl = URL.createObjectURL(acceptedFiles[0]);
    setUrlImage(imageUrl)
    // setValue("uploadImage",acceptedFiles)
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop,disabled:isInteractionDisabled})

  return (
    <MainContainer>
      <form className="form">
          <div className="formImageHotel">
            <div className="formImageHotel_containertitle">
              <h3 className="formImageHotel_title">Image Hotel</h3>
            </div>
            <ContainUploadImage {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()}/>
              {
                urlImage===null ? (
                  <>
                    <UploadImage errors={errors}/>
                  </>
                ):(
                  <UploadImageSucces dataFile={dataFileImageHotel} imageURL={urlImage}  isLoadingImage={isLoadingImage} isInteractionDisabled={isInteractionDisabled}/>
                )
                  
              }
            </ContainUploadImage>   
          </div>
          <div className="formDataHotel">
              <div className="containerDataHotel">
                <div className="containerfield">
                  <div>
                    <p className="containerfield_title">Name</p>
                    <span></span>
                  </div>
                  <input className="containerfield_input" type="text" />
                </div>
                <div className="containerfield">
                  <div>
                    <p className="containerfield_title">Address</p>
                    <span></span>
                  </div>
                  <input className="containerfield_input" type="text" />
                </div>
                <div className="containerfield">
                  <div>
                    <p className="containerfield_title">Category</p>
                    <span></span>
                  </div>
                  <input className="containerfield_input" type="text" />
                </div>
                <div className="containerfield">
                  <div>
                    <p className="containerfield_title">Price</p>
                    <span></span>
                  </div>
                  <input className="containerfield_input" type="text" />
                </div>
              </div>
          </div>
      </form>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column; 
  width: 100%;
  height: 100%;
  .form{
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
    height: 100%;
    .formImageHotel{
      &_title{
        margin: 0;
      }
      &_containertitle{
        width: 90%;
        margin: auto;
      }
      display: flex;
      flex-direction: column;
      height: 45%;
      background-color: white;
      border-radius: 20px;
    }
    .formDataHotel{
      background-color: white;
      height: 50%;
      display: flex;
      align-items: center;
      .containerDataHotel{
        display: flex;
        justify-content: space-between;
        gap: 10px;
        flex-wrap: wrap;
        margin: auto;
        width: 90%;

        .containerfield{
          display: flex;
          flex-direction: column;
          width: 48%;
          gap: 5px;
          &_title{
            margin: 0;
            font-size: 14px;
            font-weight: 600;
            color: #a88f68;
          }
          &_input{
            border: 1px solid #cccccc;
            border-radius: 5px;
            &:focus{
              border-color: #a88f68;
            }
            outline: none;
          }
        }
      }
    }
  }
`;

const ContainUploadImage = styled.div`
  width: 90%;
  border: 1px dashed #fff;
  background-color: #a88f68;
  margin: auto;
  height: 65%;
`