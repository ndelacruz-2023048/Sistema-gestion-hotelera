import React, { useState } from 'react'
import { LayoutNewRoom } from '../../Layout/LayoutNewRoom'
import { defineStepper } from '@stepperize/react'
import styled from 'styled-components'
import { FormProvider, useForm } from 'react-hook-form'
import { MyStepperRoom } from '../organismos/Room/MyStepperRoom'

export const NewRoomTemplate = () => {
    const [resetKey, setResetKey] = useState(Date.now());
    const {useStepper,utils} = defineStepper(
        {
          id: 'step-1',
          title: 'Room',
          description: 'Enter your shipping details',
        },
        {
          id: 'step-2',
          title: 'Room Detail',
          description: 'Complete the creating hotel',
        },
        {
          id: 'step-3',
          title: 'Room View',
          description: 'Complete the creating hotel',
        }
      )
    
      const methods = useStepper()
      const methodsForm = useForm()
      console.log(methods);
      
      //const {register,handleSubmit,formState:{errors}} = useForm()
      const currentStepIndex = utils.getIndex(methods.current.id)
      
      const onSubmit = async (data) => {
        try {
          console.log("Datos de todos los formularios:", data)
      
          // 1. Crear habitación
          const roomRes = await fetch("http://localhost:3000/v1/hotelhavenis/rooms/addNewRoom", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              hotel: data.hotel,
              nameOfTheRoom: data.nameOfTheRoom,
              typeRoom: data.typeRoom,
              capacity: {
                adults: data.capacity.adults,
                childrens: data.capacity.childrens,
              },
              description: data.description,
              disponibility: {
                fechas_ocupadas: data.disponibility.fechas_ocupadas.split(',').map(f => f.trim()),
                fechas_disponibles: data.disponibility.fechas_disponibles,
              }
            })
          })
      
          if (!roomRes.ok) throw new Error("Error al crear habitación")
      
            const json = await roomRes.json()
            const createdRoom = json.room   // Ahora createdRoom._id sí existe
          //console.log("Respuesta completa del backend de la habitación:", createdRoom)
          //console.log("Detalles a enviar:", data.details, data.roomNumber, createdRoom._id)
          // 2. Crear detalle de habitación usando el _id de la habitación recién creada
          const detailRes = await fetch(
            "http://localhost:3000/v1/hotelhavenis/room-details/addRooms",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                room: createdRoom._id,       // este ya está definido
                roomNumber: data.roomNumber,
                details: data.details,
              }),
            }
          )
      
          if (!detailRes.ok) throw new Error("Error al crear detalle de habitación");
      
          const createdDetail = await detailRes.json();
      
          alert("Habitación creada con éxito ✅");
          methodsForm.reset();
          methods.goTo("step-1");
      
        } catch (error) {
          console.error(error);
          alert("Ocurrió un error al crear la habitación, Hola")
        }
      }
        
      const handleClickNextStep = async () => {
        if (methods.current.id === 'step-3') {
          // Último paso: enviar
          methodsForm.handleSubmit(onSubmit)();
        } else {
          methods.next();
        }
      }
      
      const handleClickGoToSpecificStep = (id)=>{
        methods.goTo(id)
      }
  return (
    <LayoutNewRoom>
        <Container>
        
            <FormProvider {...methodsForm}>
                <div className='stepsForm'>
                    {
                    methods.all.map((step,index)=>(
                        <div className='stepContainer'>
                        <button 
                            onClick={()=>handleClickGoToSpecificStep(step?.id)} 
                            className={index<=currentStepIndex?'stepContainer_circle active':'stepContainer_circle'}>
                            {index+1}
                        </button>
                        <span className='stepContainer_text'>{step.title}</span>
                        </div>
                    ))
                    }
                </div>


              <MyStepperRoom
                onRestart={() => {
                  methodsForm.reset();
                  methods.goTo("step-1");
                }}
                stepper={methods}
                onSubmit={onSubmit}
              />
                <div className='buttonManagment'>
                  <button className='buttonManagment_prev' onClick={()=>methods.prev()}>Prev</button>
                  <button className='buttonManagment_next' onClick={handleClickNextStep}>Next</button> 
                </div>
            </FormProvider>
          </Container>
    </LayoutNewRoom>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .stepsForm{
    display: flex;
    justify-content: center;
    gap: 30px;
    height: 10%;
    .stepContainer{
      display: flex;
      align-items: center;
      gap: 8px;
      &_circle{
        background-color: ${({theme})=>theme.bg};
        border: 2px solid ${({theme})=>theme.toggleIcon};
        color: ${({theme})=>theme.toggleIcon};
        font-weight: 600;
        border-radius: 50%;
        padding: 12px 16px;
        &.active{
          background-color: ${({theme})=>theme.toggleIcon};
          color: ${({theme})=>theme.textCircleStepper};
          font-size: 15px;
        }
      }
      &_text{
        color: ${({theme})=>theme.textStepper};
        font-weight: 600;
      }
    }
  }
  .containerForms{
    height: 80%;
  }
  .buttonManagment{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 10%;
    &_prev{
      border:2px solid ${({theme})=>theme.buttonStepperColor1};
      color: ${({theme})=>theme.buttonStepperColor3};
      background-color: ${({theme})=>theme.buttonStepperColor2};
      padding: 8px 35px;
      font-weight: 600;
      font-size: 16px;
      border-radius: 20px;
      &:hover{
        color: white;
        background-color: ${({theme})=>theme.buttonStepperColor1};
      }
    }

    &_next{
      color: white;
      background-color: ${({theme})=>theme.buttonStepperColor1};
      padding: 8px 35px;
      font-weight: 600;
      font-size: 16px;
      border-radius:20px;
      &:hover{
        border:2px solid ${({theme})=>theme.buttonStepperColor1};
      color: ${({theme})=>theme.buttonStepperColor3};
      background-color: ${({theme})=>theme.buttonStepperColor2};
      }
    }
  }
`
