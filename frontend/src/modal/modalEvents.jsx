// import { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import {DataSection} from './modalEvents/DataSection'
import { useForm } from 'react-hook-form'
import { useEvent } from "../hooks/useEvent";
import { useEvents } from "../hooks/useEvents";
import { useEffect } from "react";

function ModalEvents({ togglePopup, isEdit, setIsEdit, event }) {
  const { events } = useEvent()
  const { updateEvents } = useEvents()
    const { register, handleSubmit, control, formState: { errors }, reset } = useForm(
      {
        mode: 'onChange'
      }
    )

    useEffect(()=> {
      if(isEdit && event) {
        reset(
          {
            name: event.name || '',
            description: event.description || '',
            location: event.location || '',
            capacity: event.capacity || '',
            price: event.price || '',
            startDate: event.startDate || '',
            endDate: event.endDate || '',
            designated: {
              value: event.designated || '',
              label: `${event.designated} ${event.designated} || ''`
            }
          }
        )
      }
    }, [isEdit, event, reset])

    const onSubmit = async (data)=> {
      const user = data?.designated?.value
      const start = data?.startDate.toISOString()
      const end = data?.endDate.toISOString()
      
      if(isEdit) {
        await updateEvents(event._id, data, user, start, end)
      } else {
        await events(data, user, start, end)
      }
      setIsEdit(false)
      reset()
    }
//Agregar un nuevo evento
    return (
      <Container>
        <PopupStyle>
          <Up>
            <div className="Up">
              <label htmlFor="">{isEdit ? 'Actualizar evento': 'Agregar un nuevo evento'}</label>
              <CloseIcon icon="mdi:close" onClick={togglePopup} />
            </div>
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
          <Line />
          <Blue>
            <div className="bottom">
              <button type="submit" form="formData">Enviar</button>
            </div>
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
  top: 35%;
  left: 50%;
  height: 750px;
  width: 55%;
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
  border-radius: 15px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme})=>theme.bgSidebar};
  .Up {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 20px;
  }
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
  .bottom {
    margin: 0 20px;
  }
`
