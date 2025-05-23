// import { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import {DataSection} from './modalEvents/DataSection'
import { useForm } from 'react-hook-form'
import { useEvent } from "../../../hooks/useEvent";
import { useEvents } from "../../../hooks/useEvents"
import { useEffect } from "react";

function ModalEvents({ togglePopup, isEdit, setIsEdit, event }) {
  const { events } = useEvent()
  const { updateEvents } = useEvents()
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))
    const { register, handleSubmit, control, formState: { errors, isValid }, reset } = useForm(
      {
        mode: 'onChange',
        defaultValues: event
      }
    )
    
    useEffect(() => {
      if (event && isEdit===true) {
          reset({
              _id: event._id || '',
              name: event.name || '',
              description: event.description || '',
              startDate: event.startDate ? new Date(event.startDate) : null,
              endDate: event.endDate ? new Date(event.endDate) : null,
              location: event.location || '',
              capacity: event.capacity || '',
              price: event.price || '',
              designated: event.designated ? {
                value: event.designated?._id || event.designated.value || '',
                label: `${event.designated?.name || ''} ${event.designated?.surname || ''}`.trim()
              } : null,
              hotel: event.hotel ? {
                value: event.hotel?._id || event.hotel.value || '',
                label: event.hotel?.name || event.hotel.label || ''
              } : null
          });
      } else {
          reset()
      }
    }, [event, reset, isEdit])
    
  const onSubmit = async (data) => {
    const user = data?.designated?.value || event.designated?._id;
    const hotel = data?.hotel?.value || event.hotel?._id;
    const start = data?.startDate ? data.startDate.toISOString() : (event.startDate ? new Date(event.startDate).toISOString() : null);
    const end = data?.endDate ? data.endDate.toISOString() : (event.endDate ? new Date(event.endDate).toISOString() : null);

    if (isEdit) {
      await updateEvents(data, event._id, user, hotel, start, end);
    } else {
      await events(data, user, hotel, start, end);
    }

    reset()
  }

  const handleTogglePopup = async () => {
    if(isValid) {
      await delay(1500)
      togglePopup()
    }
  }

//Agregar un nuevo evento
    return (
      <Container>
        <PopupStyle>
          <Up>
            <div className="Up">
              <label htmlFor="">{isEdit ? 'Editar evento' : 'Agregar un nuevo evento'}</label>
              <CloseIcon icon="mdi:close" onClick={() => {
                    togglePopup()
                    setIsEdit(false)
                  }
                } 
              />
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
              <button type="submit" form="formData" onClick={handleTogglePopup}>{isEdit ? 'Guardar Cambios' : 'Guardar evento'}</button>
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
