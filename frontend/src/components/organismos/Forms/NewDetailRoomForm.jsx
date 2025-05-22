import React, { useEffect, useState } from 'react';
import { useForm, FormProvider, useFormContext, useFieldArray } from 'react-hook-form'
import { TextField, MenuItem, Button, IconButton } from '@mui/material'
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
import styled from 'styled-components'

const detailOptions = [
  'Habitación', 'Mobiliario', 'Internet', 'Conectividad', 'Tecnología',
  'Climatización', 'Baño', 'Seguridad', 'Servicios', 'Estacionamiento',
  'Lavandería', 'Mascotas', 'Exteriores'
]

export const NewDetailRoomForm = () => {
  const methods = useForm()
  const { register, handleSubmit, control, formState: { errors } } = methods
  const { fields, append, remove } = useFieldArray({
    control,
    name: "details"
  })

 const [rooms, setRooms] = useState([])

  const onSubmit = (data) => {
    console.log("Datos del formulario:", data)
    // Aquí puedes hacer axios.post('/api/room-details', data)
  }

  return (
    <FormProvider {...methods}>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <h2>Registrar detalles de la habitación</h2>

        <TextField
          label="Habitación (ID)"
          fullWidth
          margin="normal"
          {...register("room", { required: "Ingrese el ID de la habitación" })}
          error={!!errors.room}
          helperText={errors.room?.message}
        />

        <TextField
          label="Número de habitación"
          type="number"
          fullWidth
          margin="normal"
          {...register("roomNumber", { required: "Campo requerido" })}
          error={!!errors.roomNumber}
          helperText={errors.roomNumber?.message}
        />

        <h3>Detalles</h3>
        <DetailListContainer>
          {fields.map((item, index) => (
            <DetailGroup key={item.id}>
              <TextField
                select
                label="Categoría"
                fullWidth
                margin="normal"
                {...register(`details.${index}.name`, { required: "Seleccione una categoría" })}
                error={!!errors.details?.[index]?.name}
                helperText={errors.details?.[index]?.name?.message}
              >
                {detailOptions.map(option => (
                  <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
              </TextField>

              <TextField
                label="Descripción"
                fullWidth
                multiline
                margin="normal"
                rows={2}
                {...register(`details.${index}.description`, { required: "Campo requerido" })}
                error={!!errors.details?.[index]?.description}
                helperText={errors.details?.[index]?.description?.message}
              />

              <IconButton onClick={() => remove(index)} color="error">
                <RemoveCircleOutline />
              </IconButton>
            </DetailGroup>
          ))}
        </DetailListContainer>
        <Button
          startIcon={<AddCircleOutline />}
          onClick={() => append({ name: "", description: "" })}
          type="button"
          sx={{ marginTop: 2 }}
        >
          Agregar detalle
        </Button>

        <Button variant="contained" type="submit" sx={{ marginTop: 3 }}>
          Guardar
        </Button>
      </FormContainer>
    </FormProvider>
  )
}

// Estilos
const FormContainer = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-width: 700px;
`

const DetailGroup = styled.div`
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 8px;
  position: relative;
`

const DetailListContainer = styled.div`
  max-height: 250px; /* ajusta según tu diseño */
  overflow-y: auto;
  margin-bottom: 15px;
  padding-right: 5px;
`