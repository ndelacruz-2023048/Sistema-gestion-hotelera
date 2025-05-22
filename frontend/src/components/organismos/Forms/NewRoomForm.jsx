import React, { useEffect } from 'react';
import styled from "styled-components";
import { TextField, MenuItem } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { Button } from "@mui/material";
import axios from 'axios';

const roomTypes = ["Estandar", "Semipremium", "Premium", "Suite", "Deluxe", "Penthouse"];

export const NewRoomForm = ({ onSubmit }) => {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useFormContext();

  const onSubmitRoom = async (data) => {
    const response = await axios.post('http://localhost:3000/v1/hotelhavenis/rooms/addNewRoom', data);
    const roomId = response.data._id;
    setValue("roomId", roomId); // Guardas el ID para usarlo en el siguiente paso
    onSubmit();
  };

  const roomId = watch("roomId");
  useEffect(() => {
    console.log("ID de la habitación que viene del paso anterior:", roomId);
  }, [roomId]);

  const [hotels, setHotels] = React.useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await axios.get("http://localhost:3000/v1/hotelhavenis/hotels/getHotels");
        setHotels(res.data.hotels || []);
      } catch (error) {
        console.error("Error al obtener los hoteles:", error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <MainContainer>
      <form onSubmit={handleSubmit(onSubmitRoom)}>
        <FormContainer>
          <SectionTitle>Información de la habitación</SectionTitle>
          <Container2>
            <FormGroup>
              <TextOption
                select
                label="Hotel perteneciente"
                fullWidth
                {...register("hotel", { required: "Campo requerido" })}
                error={!!errors.hotel}
                helperText={errors.hotel?.message}
              >
                {hotels.map((hotel) => (
                  <MenuItem key={hotel._id} value={hotel._id}>
                    {hotel.name} - {hotel.category}
                  </MenuItem>
                ))}
              </TextOption>
            </FormGroup>

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
  );
};

// ... estilos (sin cambios) ...

const MainContainer = styled.div`
  display: flex;
  flex-direction: column; 
  width: 100%;
  height: 100%;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1; 
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 2px ${({ theme }) => theme.color};
`;

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
`;

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
`;

const Container2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.color};
  margin-bottom: 10px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color};
  flex: 1;
  gap: 10px;
  margin: 5px;
`;

const Line = styled.div`
  width: 100%;
  border-top: 2px solid ${({ theme }) => theme.color};
  margin: 20px 0;
`;

const LineHeader = styled.div`
  width: 100%;
  border-top: 2px solid ${({ theme }) => theme.color};
`;

const ContainUploadImage = styled.div`
  height: 30%;
  width: 100%;
  border: 1px dashed #65dbff;
`;
