import styled from "styled-components";
import React, { useState } from "react";
import { TextField, MenuItem, Button as MuiButton } from "@mui/material";
import {NavLink , useNavigate} from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { GoArrowRight } from "react-icons/go";
import { Icon } from "@iconify/react";
import { ButtonHome } from "../../atomos/ButtonHome";

export const HiringStage = ({register,errors}) => {
  const navigate = useNavigate();

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
                  label="Job Title"
                  placeholder="React Native Mobile Developer"
                  variant="outlined"
                  fullWidth
                  error={!!errors.jobTitle}
                  helperText={errors.jobTitle?.message}
                  {...register("jobTitle", { required: "Job Title is required." })}
                />
              </FormGroup>

              <Container2>
                <FormGroup>
                  <TextOption
                    label="Role"
                    select
                    variant="outlined"
                    fullWidth
                    error={!!errors.role}
                    helperText={errors.role?.message}
                    {...register("role", { required: "Role is required." })}
                  >
                    <MenuItem value="Mobile Developer">Mobile Developer</MenuItem>
                    <MenuItem value="Web Developer">Web Developer</MenuItem>
                  </TextOption>
                </FormGroup>

                <FormGroup>
                  <TextOption
                    label="Category"
                    select
                    variant="outlined"
                    fullWidth
                    error={!!errors.category}
                    helperText={errors.category?.message}
                    {...register("category", { required: "Category is required." })}
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
                  variant="outlined"
                  fullWidth
                  error={!!errors.employmentType}
                  helperText={errors.employmentType?.message}
                  {...register("employmentType", { required: "Employment Type is required." })}
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
                    variant="outlined"
                    fullWidth
                    error={!!errors.jobPlacement}
                    helperText={errors.jobPlacement?.message}
                    {...register("jobPlacement", { required: "Job Placement is required." })}
                  >
                    <MenuItem value="Onsite">Onsite</MenuItem>
                    <MenuItem value="Remote">Remote</MenuItem>
                  </CustomTextField>
                </FormGroup>

                <FormGroup>
                  <CustomTextField
                    select
                    label="Experience"
                    variant="outlined"
                    fullWidth
                    error={!!errors.experience}
                    helperText={errors.experience?.message}
                    {...register("experience", { required: "Experience is required." })}
                  >
                    <MenuItem value="4-6 years">4-6 years</MenuItem>
                    <MenuItem value="2-4 years">2-4 years</MenuItem>
                  </CustomTextField>
                </FormGroup>
              </Container2>

              <SectionTitle>Location</SectionTitle>

              <Container2>
                <FormGroup>
                  <CustomTextField
                    select
                    label="City"
                    variant="outlined"
                    fullWidth
                    error={!!errors.city}
                    helperText={errors.city?.message}
                    {...register("city", { required: "City is required." })}
                  >
                    <MenuItem value="Select City">Select City</MenuItem>
                  </CustomTextField>
                </FormGroup>

                <FormGroup>
                  <CustomTextField
                    select
                    label="Country"
                    variant="outlined"
                    fullWidth
                    error={!!errors.country}
                    helperText={errors.country?.message}
                    {...register("country", { required: "Country is required." })}
                  >
                    <MenuItem value="Select Country">Select Country</MenuItem>
                  </CustomTextField>
                </FormGroup>
              </Container2>

              <Container2>
                <FormGroup>
                  <CustomTextField
                    select
                    label="Province/State"
                    variant="outlined"
                    fullWidth
                    error={!!errors.province}
                    helperText={errors.province?.message}
                    {...register("province", { required: "Province/State is required." })}
                  >
                    <MenuItem value="Select Province/State">Select Province/State</MenuItem>
                  </CustomTextField>
                </FormGroup>

                <FormGroup>
                  <CustomTextField
                    label="Zip/Postal Code"
                    variant="outlined"
                    placeholder="ex. 098098"
                    fullWidth
                    error={!!errors.zipCode}
                    helperText={errors.zipCode?.message}
                    {...register("zipCode", { required: "Zip/Postal Code is required." })}
                  />
                </FormGroup>
              </Container2>

              
            </FormContainer>
          </Container>
        </Body>
      </form>
    </MainContainer>
  );
};

const CheckCircleIconStyled = styled(CheckCircleIcon)`
  color: #4CAF50;
  align-self: center;
  margin-right: 10px;
  font-size: 24px;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column; 
  width: 100%;
  height: 100%;
`;



const Header = styled.div`
  display: flex;
  margin-left : 40px;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
  font-size: 24px;
  font-weight: bold;
  .clock {
    font-size: 35px;
    color: ${({ theme }) => theme.color};
  }
  .question {
    font-size: 35px;
    color: ${({ theme }) => theme.color};
  }
`;

const SectionTitleHeader = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.color};
  margin-left: 20px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const ButtonGroupHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 900px;
  
`

const ButtonGoup = styled(MuiButton)`
    && {
        width: 40px; 
        height: 40px;
        padding: 5px; 
        font-size: 14px; 
        color: #fff;
        border-radius: 10px;
        background-color: transparent;
        display: flex;
        align-items: center; 
        justify-content: center;
        &:hover {
            background-color: transparent;
        }
        .MuiButton-label {
            color: ${({ theme }) => theme.color};
        }
    }
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1; 
`;

const Pie = styled.div`
  display: flex;
  justify-content: space-between; /* Cambiado de flex-end a space-between */
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-top: 1px solid ${({ theme }) => theme.color};
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Sidebar = styled.div`
  gap: 10px;
  height: 100vh;
  width: 250px;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colorHover};
  }
`;

const SidebarItem = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.color};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colorHover};
  }
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 1px 2px  ${({theme})=>theme.color};
    width: 200%;  
    height: 100%;
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

const ButtonLeft = styled(MuiButton)`
    && {
        padding: 10px 20px;
        font-size: 14px;
        font-weight: bold;
        color: #fff;
        border-radius: 28px;
        
        background-color: ${(props) => (props.primary ? "#4caf50" : "#ccc")};
        &:hover {
        background-color: ${(props) => (props.primary ? "#45a049" : "#b3b3b3")};
        }
    }
`;
const ButtonRigth = styled(MuiButton)`
    && {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 20px;
        font-weight: bold;
        background-color: #4caf50;
        border-radius: 28px;
        margin-left: 1000px;
    }
`;

const Arrow = styled(GoArrowRight)`
    color: ${({theme})=>theme.color};
    font-size: 20px;
    margin-left: 5px; 
    align-items: center;
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

const LineIcon = styled.div`
  height: 50%; 
  width: 2px; 
  background-color: ${({theme})=>theme.color};
  margin: 0 10px; 
  display: flex;
  align-items: center;
  justify-content: center;
`;
