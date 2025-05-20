import React from 'react'
import { Reservation } from '../components/organismos/Forms/Reservation'
import { Layout } from '../hooks/Layout'
import styled from 'styled-components'
import {defineStepper} from "@stepperize/react"
import { useForm } from 'react-hook-form'
import { HiringStage } from '../components/organismos/Forms/HiringStage'

export const NewHotelPage = () => {
  const {useStepper} = defineStepper(
    {
      id: 'step-1',
      title: 'Shipping',
      description: 'Enter your shipping details',
    },
    {
      id: 'step-2',
      title: 'Payment',
      description: 'Enter your payment details',
    },
    { id: 'step-3', title: 'Complete', description: 'Checkout complete' }
  )

  const methods = useStepper()

  const {register,handleSubmit,formState:{errors}} = useForm()

  const onSubmit= (data)=>{
    console.log("Primer paso correcto");
    console.log(data);
    methods.next()
  }

  const handleClickNextStep = async()=>{
    await handleSubmit(onSubmit)()
  }

  return (
    <Container>
      <div>
        {
          methods.switch({
            "step-1":(step)=><Reservation register={register} errors={errors}/>,
            "step-2":(step)=><HiringStage register={register} errors={errors}/>,
            "step-3":(step)=>(
              <div>
                <span>Secon:{step.title}</span>
                <p>{step.description}</p>
              </div>
            )
          })
        }
        <div>
          <button onClick={()=>methods.prev()}>Prev</button>
          <button onClick={handleClickNextStep}>Next</button> 
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  
`