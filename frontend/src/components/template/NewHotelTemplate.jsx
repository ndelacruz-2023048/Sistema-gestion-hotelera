import { defineStepper } from '@stepperize/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { NewHotelForm } from '../organismos/Forms/NewHotelForm'
import { CompleteNewHotelForm } from '../organismos/Forms/CompleteNewHotelForm'
import { useHotelStore } from '../../store/HotelStore'

export const NewHotelTemplate = () => {
  const {setNewHotel} = useHotelStore()
    const {useStepper,utils} = defineStepper(
        {
          id: 'step-1',
          title: 'Create',
          description: 'Enter your shipping details',
        },
        {
          id: 'step-2',
          title: 'Complete',
          description: 'Complete the creating hotel',
        }
      )
    
      const methods = useStepper()
      
      const {register,handleSubmit,formState:{errors},setValue} = useForm()
      const currentStepIndex = utils.getIndex(methods.current.id)
      
      const onSubmit= (data)=>{
        console.log("Primer paso correcto");
        setNewHotel(data)
        methods.next()
      }
    
      const handleClickNextStep = async()=>{
        handleSubmit(onSubmit)()
      }
      
      const handleClickGoToSpecificStep = (id)=>{
          handleSubmit(()=>{
          methods.goTo(id)
        })()
      }

      return (
        <Container>
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
          <div className='containerForms'>
            {
              methods.switch({
                "step-1":(step)=><NewHotelForm register={register} errors={errors} setValue={setValue}/>,
                "step-2":(step)=><CompleteNewHotelForm/>,
              })
            }
          </div>
          {
            !methods.isLast && (
            <div className='buttonManagment'>
              <button className='buttonManagment_prev' onClick={()=>methods.prev()}>Prev</button>
              <button className='buttonManagment_next' onClick={handleClickNextStep}>Next</button> 
            </div>
            )
          }
          </Container>
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