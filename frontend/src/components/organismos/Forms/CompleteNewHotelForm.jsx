import styled from "styled-components";
import React, { useState } from "react";
import { TextField, MenuItem, Button as MuiButton } from "@mui/material";
import {NavLink , useNavigate} from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRoomStore } from "../../../store/RoomsStore";
import { useHotelStore } from "../../../store/HotelStore";
import { useSaveImage } from "../../../hooks/SaveImage";
import { toast } from 'sonner';

export const CompleteNewHotelForm = () => {
  const {newHotel,createHotel} = useHotelStore()
  const {registerImage} = useSaveImage()
  const navigate = useNavigate();

  const handleClickSaveContinue = async()=>{
    const data = await registerImage(newHotel?.uploadImage?.[0]) 
    const hotel = {
      name:newHotel.nameHotel,
      address:newHotel.addressHotel,
      category:newHotel.categoryHotel,
      price:parseFloat(newHotel.priceHotel),
      image:data?.responseImage?.secure_url,
    }
    const myPromise = createHotel(hotel)
    toast.promise(myPromise,{loading:"Saving hotel",success:()=>{
      navigate("/room/new")
      return(
        "Hotel Saved"
      )
    }})
  }

  const handleClickSaveClose =async()=>{
    const data = await registerImage(newHotel?.uploadImage?.[0]) 
    const hotel = {
      name:newHotel.nameHotel,
      address:newHotel.addressHotel,
      category:newHotel.categoryHotel,
      price:parseFloat(newHotel.priceHotel),
      image:data?.responseImage?.secure_url,
    }
    const myPromise = createHotel(hotel)
    toast.promise(myPromise,{loading:"Saving hotel",success:()=>{
      navigate("/")
      return(
        "Hotel Saved"
      )
    }})
  }
  
  return (
    <Container>
      <div className="infoHotelCreated">
        Realizar este diseño en este componente , y en este espacio 
        <a target="_blank"  href="https://dribbble.com/shots/24799919-Dentist-Appointment-Scheduling-App-Success-Screen">  Ir al diseño</a>
      </div>  
      <div className="buttonsManagment">
          <button onClick={handleClickSaveClose}> <Icon icon="fluent:save-32-light"/> Save & Close</button>
          <button onClick={handleClickSaveContinue}> <Icon icon="dashicons:saved"/> Save & Continue</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column; 
  width: 100%;
  height: 100%;
  .infoHotelCreated{
    height: 90%;
  }
  .buttonsManagment{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    height: 10%;
  }
`;



