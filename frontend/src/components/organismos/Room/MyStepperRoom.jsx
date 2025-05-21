import React from 'react'
import { useFormContext } from 'react-hook-form';
import { NewRoomForm } from '../Forms/NewRoomForm';
import { NewRoomViewForm } from '../Forms/NewRoomViewForm';
import { NewDetailRoomForm } from '../Forms/NewDetailRoomForm';
export const MyStepperRoom = ({ onRestart,stepper }) => {
    const { handleSubmit } = useFormContext();
  
    const onSubmit = (data) => {
      console.log("Formulario completado:", data);
      onRestart(); // volver a empezar
    };
  
    return stepper.switch({
      "step-1": () => <NewRoomForm />,
      "step-2": () => <NewDetailRoomForm />,
      "step-3": () => <NewRoomViewForm />
    });
}


