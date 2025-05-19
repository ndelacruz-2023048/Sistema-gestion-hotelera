import React from 'react'
import { Reservation } from '../components/organismos/Forms/Reservation'
import { Layout } from '../hooks/Layout'
import styled from 'styled-components'
import {defineStepper} from "@stepperize/react"

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

  return (
        // <Reservation />
    <Container>
      <div>
        <div>
          <button onClick={()=>methods.prev()}>Prev</button>
          <button onClick={()=>methods.next()}>Next</button>
        </div>
        {
          methods.switch({
            "step-1":(step)=><span>{step.title}</span>,
            "step-2":(step)=>(
              <div>
                <span>Secon:{step.title}</span>
                <p>{step.description}</p>
              </div>
            ),
            "step-3":(step)=>(
              <div>
                <span>Secon:{step.title}</span>
                <p>{step.description}</p>
              </div>
            )
          })
        }
      </div>
    </Container>
  )
}

const Container = styled.div`
  
`