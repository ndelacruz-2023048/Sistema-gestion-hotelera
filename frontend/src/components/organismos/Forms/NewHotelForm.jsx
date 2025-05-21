import styled from "styled-components";
import React, { useCallback, useState } from "react";
import { TextField, MenuItem, Button as MuiButton } from "@mui/material";
import {NavLink,useNavigate } from "react-router-dom";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { SlArrowLeftCircle } from "react-icons/sl";
import { GoArrowRight } from "react-icons/go";
import {Icon} from '@iconify/react'
import { ButtonHome } from "../../atomos/ButtonHome";
import { useForm } from "react-hook-form";
import {useDropzone} from 'react-dropzone'
import { UploadImage } from "../UploadImage/UploadImage";
import { UploadImageSucces } from "../UploadImage/UploadImageSuccess";
import { useSaveImage } from "../../../hooks/SaveImage";
import { useRoomStore } from "../../../store/RoomsStore";


export const NewHotelForm = ({register,errors}) => {


  ///Codigo para subir una imagen
  const {dataImage,isLoadingImage,registerImage} = useSaveImage()

  //Estados para subir imagenes
  const {dataFileImageHotel,setDataFileImageHotel} = useRoomStore()
  const [urlImage,setUrlImage] = useState(null)/*State para URL IMAGEN */
  const [isInteractionDisabled, setIsInteractionDisabled] = useState(false)/*State para deshabilitar botones e inputs cuando algo se este subiendo o guardando */

  const onDrop = useCallback(acceptedFiles => {
    setDataFileImageHotel()
    const imageUrl = URL.createObjectURL(acceptedFiles[0]);
    setUrlImage(imageUrl)
    // setValue("uploadImage",acceptedFiles)
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop,disabled:isInteractionDisabled})

  return (
    <MainContainer>
      <form>
        <LineHeader />

        <Body>
          <Container>
            <FormContainer>
              <SectionTitle>Basic Information</SectionTitle>
              <FormGroup>
                <CustomTextField
                  label="School Title"
                  placeholder="React Native Mobile Developer"
                  fullWidth
                  {...register("jobTitle", { required: "Job Title is required." })}
                  error={!!errors.jobTitle}
                  helperText={errors.jobTitle?.message}
                />
              </FormGroup>

              <Container2>
                <FormGroup>
                  <TextOption
                    select
                    label="Role"
                    fullWidth
                    {...register("role", { required: "Role is required." })}
                    error={!!errors.role}
                    helperText={errors.role?.message}
                  >
                    <MenuItem value="Mobile Developer">Mobile Developer</MenuItem>
                    <MenuItem value="Web Developer">Web Developer</MenuItem>
                  </TextOption>
                </FormGroup>

                <FormGroup>
                  <TextOption
                    select
                    label="Category"
                    fullWidth
                    {...register("category", { required: "Category is required." })}
                    error={!!errors.category}
                    helperText={errors.category?.message}
                  >
                    <MenuItem value="Developer">Developer</MenuItem>
                    <MenuItem value="Designer">Designer</MenuItem>
                  </TextOption>
                </FormGroup>
              </Container2>

              <Line />

              <SectionTitle>Additional Information</SectionTitle>
              <FormGroup>
                <CustomTextField
                  select
                  label="Employment Type"
                  fullWidth
                  {...register("employmentType", { required: "Employment Type is required." })}
                  error={!!errors.employmentType}
                  helperText={errors.employmentType?.message}
                >
                  <MenuItem value="Fulltime">Fulltime</MenuItem>
                  <MenuItem value="Freelance">Freelance</MenuItem>
                </CustomTextField>
              </FormGroup>

              <Container2>
                <FormGroup>
                  <CustomTextField
                    select
                    label="Job Placement"
                    fullWidth
                    {...register("jobPlacement", { required: "Job Placement is required." })}
                    error={!!errors.jobPlacement}
                    helperText={errors.jobPlacement?.message}
                  >
                    <MenuItem value="Onsite">Onsite</MenuItem>
                    <MenuItem value="Remote">Remote</MenuItem>
                  </CustomTextField>
                </FormGroup>
                <FormGroup>
                  <CustomTextField
                    select
                    label="Experience"
                    fullWidth
                    {...register("experience", { required: "Experience is required." })}
                    error={!!errors.experience}
                    helperText={errors.experience?.message}
                  >
                    <MenuItem value="4-6 years">4-6 years</MenuItem>
                    <MenuItem value="2-4 years">2-4 years</MenuItem>
                  </CustomTextField>
                </FormGroup>
              </Container2>

              <ContainUploadImage {...getRootProps({className: 'dropzone'})}>
            <input {...getInputProps()}/>
            {
              urlImage===null ? (
                <>
                  <UploadImage errors={errors}/>
                </>
              ):(
                <UploadImageSucces dataFile={dataFileImageHotel} imageURL={urlImage}  isLoadingImage={isLoadingImage} isInteractionDisabled={isInteractionDisabled}/>
              )
                
            }
          </ContainUploadImage>   
            </FormContainer>
          </Container>
        </Body>
      </form>
    </MainContainer>
  );
};

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
    box-shadow: 0 1px 2px  ${({theme})=>theme.color};
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
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({theme})=>theme.color};
    flex: 1;
    gap: 10px;
    
`;


const Line = styled.div`
    width: 100%;
    border-top: 2px solid ${({theme})=>theme.color};
    margin: 20px 0;
`;
const LineHeader = styled.div`
    width: 100%;
    border-top: 2px solid ${({theme})=>theme.color};
    
`;


const ContainUploadImage = styled.div`
  height: 30%;
  width: 100%;
  border: 1px dashed #65dbff;
`