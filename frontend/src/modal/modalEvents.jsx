// import { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import {DataSection} from './modalEvents/DataSection'
import { useForm } from 'react-hook-form'
import { useEvent } from "../hooks/useEvent";

function ModalEvents({ togglePopup }) {
  const { events } = useEvent()
    const { register, handleSubmit, control, formState: { errors, isValid }, reset } = useForm()

    const onSubmit = async (data)=> {
      console.log('a', data);
      const user = data?.designated?.value
      const start = data?.startDate.toISOString()
      const end = data?.endDate.toISOString()
      await events(data, user, start, end)
      reset()
    }
    const buttonDisabled = !isValid

    return (
      <Container>
        <PopupStyle>
          <Up>
            <label htmlFor="">Agregar un nuevo evento</label>
            <CloseIcon icon="mdi:close" onClick={togglePopup} />
          </Up>
          <Line></Line>
          <Cont>
            <form id="formData" onSubmit={handleSubmit(onSubmit)}></form>
            <DataSection
              register={register}
              control={control}
              errors={errors}
            />
          </Cont>
          <Line></Line>
          <Blue>
            <Clip icon="flowbite:paper-clip-outline" />
            <button type="submit" form="formData" disabled={buttonDisabled}>Enviar</button>
          </Blue>
        </PopupStyle>
      </Container>
    )
}

export default ModalEvents

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  backdrop-filter: blur(25px);
  height: 100vh;
  width: 100%;
  z-index: 100;
  top: 0;
  right: 0;
`

const PopupStyle = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  height: 500px;
  width: 45%;
  border-radius: 15px;
  transform: translate(-50%, -30%);
  padding: 0px;
  background-color: ${({theme})=>theme.bgSidebar};
  color: rgb(165, 165, 165);
  z-index: 1000;
  display: flex;
  flex-direction: column;
`;

const Up = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  padding: 0px;
  margin-bottom: 0px;
  border-radius: 15px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme})=>theme.bgSidebar};
`;

const CloseIcon = styled(Icon)`
  color: rgb(165, 165, 165);
  font-size: 30px;
  cursor: pointer;
  margin-right: 3%;
  transition: 0.5s;
  padding-bottom: 0px;
  margin-bottom: 0px;

  &:hover {
    color: ${({theme})=>theme.colorHover};
  }

`

const OptionRow = styled.div`
  display: flex;
  gap: 0px;
  background-color: ${({theme})=>theme.bgSidebar};
  padding: 10px;
  padding-bottom: 0px;
  margin-bottom: 0px;
`

const Line = styled.div`
  height: 2px;
  width: 100%;
  background-color: rgb(148, 148, 148);
`

const Cont = styled.div`
    height: 60%;
    width: 100%;
`

const Blue = styled.div`
  display: flex;
  background-color: ${({theme})=>theme.bgSidebar};
  height: 20%;
  justify-content: flex-end;
  align-items: center;
  border-radius: 0 0 10px 15px;

  
`

const Clip = styled(Icon)`
  color: rgb(165, 165, 165);
  font-size: 30px;
  cursor: pointer;
  margin-right: 3%;
  transition: 0.5s;

  &:hover {
    color: ${({theme})=>theme.colorHover};
  }

`

