import React from 'react';
import styled from "styled-components";
import { TextField, MenuItem } from "@mui/material"
import { useFormContext } from "react-hook-form"
import { Button } from "@mui/material";

const roomTypes = ["Estandar", "Semipremium", "Premium", "Suite", "Deluxe", "Penthouse"]

export const NewRoomForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useFormContext(); // ✅ usamos useFormContext en lugar de useForm

  return (
    <MainContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <SectionTitle>Información de la habitación</SectionTitle>
          <Container2>
          <FormGroup>
            <CustomTextField
              label="Nombre de la habitación"
              fullWidth
              {...register("nameOfTheRoom", { required: "Campo requerido" })}
              error={!!errors.nameOfTheRoom}
              helperText={errors.nameOfTheRoom?.message}
            />
          </FormGroup>
          </Container2>
          <FormGroup>
            <TextOption
              select
              label="Tipo de habitación"
              fullWidth
              {...register("typeRoom", { required: "Campo requerido" })}
              error={!!errors.typeRoom}
              helperText={errors.typeRoom?.message}
            >
              {roomTypes.map((type) => (
                <MenuItem key={type} value={type}>{type}</MenuItem>
              ))}
            </TextOption>
          </FormGroup>

          <Container2>
            <FormGroup>
              <CustomTextField
                label="Capacidad adultos"
                type="number"
                fullWidth
                {...register("capacity.adults", { required: "Campo requerido" })}
                error={!!errors?.capacity?.adults}
                helperText={errors?.capacity?.adults?.message}
              />
            </FormGroup>

            <FormGroup>
              <CustomTextField
                label="Capacidad niños"
                type="number"
                fullWidth
                {...register("capacity.childrens", { required: "Campo requerido" })}
                error={!!errors?.capacity?.childrens}
                helperText={errors?.capacity?.childrens?.message}
              />
            </FormGroup>
          </Container2>

          <FormGroup>
            <CustomTextField
              label="Descripción"
              multiline
              rows={3}
              fullWidth
              {...register("description", { required: "Campo requerido" })}
              error={!!errors.description}
              helperText={errors.description?.message}
            />
          </FormGroup>
        </FormContainer>
      </form>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column; 
  width: 100%;
  height: 100%;
`

const Body = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1; 
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 1px 2px  ${({theme})=>theme.color};
`

const CustomTextField = styled(TextField)`
  && {
    color: ${({ theme }) => theme.color}; 
    .MuiOutlinedInput-root {
      border-radius: 28px; 
      color: ${({ theme }) => theme.color};
      fieldset {
      border-color: ${({ theme }) => theme.color}; 
      }
      &:hover fieldset {
      border-color: ${({ theme }) => theme.colorHover};
      }
      &.Mui-focused fieldset {
      border-color: ${({ theme }) => theme.colorHover};
      }
    }
    .MuiInputLabel-root {
      color: ${({ theme }) => theme.color}; 
    }
    .MuiSelect-icon {
      color: ${({ theme }) => theme.color}; 
    }
    .MuiSelect-select {
      color: ${({ theme }) => theme.color};
      border-radius: 28px;
    }
  }
`

const TextOption = styled(TextField)`
    display: flex;
    
    && {
      .MuiOutlinedInput-root {
        border-radius: 28px;
        background-color: ${({ theme }) => theme.backgroundColor}; 
        fieldset {
          border-color: ${({ theme }) => theme.color}; 
        }
        &:hover fieldset {
          border-color: ${({ theme }) => theme.colorHover};
        }
        &.Mui-focused fieldset {
          border-color: ${({ theme }) => theme.colorHover};
        }
      }
      .MuiInputLabel-root {
        color: ${({ theme }) => theme.colorLabel}; 
      }
      .MuiSelect-icon {
        color: ${({ theme }) => theme.color}; 
      }
    }
`

const Container2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
`

const SectionTitle = styled.h3`
    font-size: 18px;
    font-weight: bold;
    color: ${({theme})=>theme.color};
    margin-bottom: 10px;
`

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({theme})=>theme.color};
    flex: 1;
    gap: 10px;
    margin: 5px;
    
`

const Line = styled.div`
    width: 100%;
    border-top: 2px solid ${({theme})=>theme.color};
    margin: 20px 0;
`
const LineHeader = styled.div`
    width: 100%;
    border-top: 2px solid ${({theme})=>theme.color};
    
`;

const ContainUploadImage = styled.div`
  height: 30%;
  width: 100%;
  border: 1px dashed #65dbff;
`
