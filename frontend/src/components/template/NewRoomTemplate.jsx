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
      const methodsForm = useForm();
      const {handleSubmit,getValues} = methodsForm
      const currentStepIndex = utils.getIndex(methods.current.id)
      
      const validateRooom =(data)=>{
        console.log(data);
        methods.next()
      }

      const validateRoomDetail = (data)=>{
        
        console.log(getValues(["roomNumber","room"]));
        
      }
      
      const onSubmit = async (data) => {
        if(currentStepIndex===0){
          validateRooom(data)
        }else if(currentStepIndex===1){
          validateRoomDetail(data)
        }
      };
        
      const handleClickNextStep = async()=>{
        handleSubmit(onSubmit)()
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
                  <button className='buttonManagment_next' onClick={()=>handleClickNextStep()}>Next</button> 
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
