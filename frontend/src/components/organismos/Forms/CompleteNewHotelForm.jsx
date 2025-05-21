import styled from "styled-components";
import React, { useState } from "react";
import { TextField, MenuItem, Button as MuiButton } from "@mui/material";
import {NavLink , useNavigate} from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRoomStore } from "../../../store/RoomsStore";


export const CompleteNewHotelForm = () => {
  return (
    <Container>
      <div className="infoHotelCreated">
        Realizar este diseño en este componente , y en este espacio 
        <a target="_blank"  href="https://dribbble.com/shots/24799919-Dentist-Appointment-Scheduling-App-Success-Screen">  Ir al diseño</a>
      </div>  
      <div className="buttonsManagment">
          <button> <Icon icon="fluent:save-32-light"/> Save & Close</button>
          <NavLink to="/room/new">
            <button> <Icon icon="dashicons:saved"/> Save & Continue</button>
          </NavLink> 
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



