import React from 'react'
import { useFormContext } from 'react-hook-form'
import { NewRoomForm } from '../Forms/NewRoomForm'
import { NewRoomViewForm } from '../Forms/NewRoomViewForm'
import { NewDetailRoomForm } from '../Forms/NewDetailRoomForm'

export const MyStepperRoom = ({ onRestart, stepper, onSubmit }) => {
  return stepper.switch({
    "step-1": () => <NewRoomForm />,  // onSubmit ya viene como handleSubmit(onSubmit)
    "step-2": () => <NewDetailRoomForm />,
    "step-3": () => <NewRoomViewForm />
  })
}