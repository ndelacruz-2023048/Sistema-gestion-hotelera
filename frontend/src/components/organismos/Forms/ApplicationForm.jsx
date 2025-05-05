import styled from "styled-components";
import React, { useState } from "react";
import { TextField, MenuItem, Button as MuiButton } from "@mui/material";
import { useNavigate, NavLink } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { GoArrowRight } from "react-icons/go";
import {Icon} from '@iconify/react'
import { ButtonHome } from "../../atomos/ButtonHome"

export const ApplicationForm = () => {
  const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const [formData, setFormData] = useState({
      jobTitle: "",
      role: "",
      category: "",
      employmentType: "",
      jobPlacement: "",
      experience: "",
      city: "",
      country: "",
      province: "",
      zipCode: "",
      addressLine1: "",
      addressLine2: "",
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const validateForm = () => {
      const errors = {};
      if (!formData.jobTitle) errors.jobTitle = "Job Title is required.";
      if (!formData.role) errors.role = "Role is required.";
      if (!formData.category) errors.category = "Category is required.";
      if (!formData.employmentType) errors.employmentType = "Employment Type is required.";
      if (!formData.jobPlacement) errors.jobPlacement = "Job Placement is required.";
      if (!formData.experience) errors.experience = "Experience is required.";
      if (!formData.city) errors.city = "City is required.";
      if (!formData.country) errors.country = "Country is required.";
      if (!formData.province) errors.province = "Province/State is required.";
      if (!formData.zipCode) errors.zipCode = "Zip/Postal Code is required.";
      if (!formData.addressLine1) errors.addressLine1 = "Address Line 1 is required.";
      setFormErrors(errors);
      return Object.keys(errors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        console.log("Form submitted successfully:", formData);
        navigate("/"); 
      }
    };
  return (
    <MainContainer>
      <form onSubmit={handleSubmit}>
        <Header>
          <ButtonHome />
          <SectionTitleHeader>Reservation Form Hotel</SectionTitleHeader>
          <ButtonGroupHeader>
          <ButtonGoup variant="contained">
            <Icon icon="hugeicons:clock-04" className="clock" />
          </ButtonGoup>
          <LineIcon/>
          <ButtonGoup variant="contained">
            <Icon icon="fluent:question-24-filled" className="question" />
          </ButtonGoup>
          </ButtonGroupHeader>
        </Header>
          <LineHeader />

        <Body>
          <Sidebar>
            <SidebarItem><CheckCircleIconStyled />Resevation</SidebarItem>
            <SidebarItem><CheckCircleIconStyled />Details Room</SidebarItem>
            <SidebarItem><CheckCircleIconStyled />Hiring Stage</SidebarItem>
          </Sidebar>
          <Container>
            <FormContainer>
              <SectionTitle>Basic Information</SectionTitle>
              <FormGroup>
                <CustomTextField
                  name="jobTitle"
                  label="Job Title"
                  variant="outlined"
                  placeholder="React Native Mobile Developer"
                  fullWidth
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  error={!!formErrors.jobTitle}
                  helperText={formErrors.jobTitle}
                />
              </FormGroup>

              <Container2>
                <FormGroup>
                  <TextOption name="role"
                    select
                    label="Role"
                    variant="outlined"
                    fullWidth
                    value={formData.role}
                    onChange={handleInputChange}
                    error={!!formErrors.role}
                    helperText={formErrors.role}>
                    <MenuItem value="Mobile Developer">Mobile Developer</MenuItem>
                    <MenuItem value="Web Developer">Web Developer</MenuItem>
                  </TextOption>
                </FormGroup>

                <FormGroup>
                  <TextOption 
                    name="category"
                    select
                    label="Category"
                    variant="outlined"
                    fullWidth
                    value={formData.category}
                    onChange={handleInputChange}
                    error={!!formErrors.category}
                    helperText={formErrors.category}
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
                  name="employmentType"
                  select
                  label="Employment Type"
                  variant="outlined"
                  fullWidth
                  value={formData.employmentType}
                  onChange={handleInputChange}
                  error={!!formErrors.employmentType}
                  helperText={formErrors.employmentType}
                >
                  <MenuItem value="Fulltime">Fulltime</MenuItem>
                  <MenuItem value="Freelance">Freelance</MenuItem>
                </CustomTextField>
              </FormGroup>

              <Container2>
                <FormGroup>
                  <CustomTextField
                    name="jobPlacement"
                    select
                    label="Job Placement"
                    variant="outlined"
                    fullWidth
                    value={formData.jobPlacement}
                    onChange={handleInputChange}
                    error={!!formErrors.jobPlacement}
                    helperText={formErrors.jobPlacement}
                  >
                    <MenuItem value="Onsite">Onsite</MenuItem>
                    <MenuItem value="Remote">Remote</MenuItem>
                  </CustomTextField>
                </FormGroup>
                <FormGroup>
                  <CustomTextField
                    name="experience"
                    select
                    label="Experience"
                    variant="outlined"
                    fullWidth
                    value={formData.experience}
                    onChange={handleInputChange}
                    error={!!formErrors.experience}
                    helperText={formErrors.experience}
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
                    name="city"
                    select
                    label="City"
                    variant="outlined"
                    fullWidth
                    value={formData.city}
                    onChange={handleInputChange}
                    error={!!formErrors.city}
                    helperText={formErrors.city}
                  >
                    <MenuItem value="Select City">Select City</MenuItem>
                  </CustomTextField>
                </FormGroup>
                <FormGroup>
                  <CustomTextField
                    name="country"
                    select
                    label="Country"
                    variant="outlined"
                    fullWidth
                    value={formData.country}
                    onChange={handleInputChange}
                    error={!!formErrors.country}
                    helperText={formErrors.country}
                  >
                    <MenuItem value="Select Country">Select Country</MenuItem>
                  </CustomTextField>
                </FormGroup>
              </Container2>

              <Container2>
                <FormGroup>
                  <CustomTextField
                    name="province"
                    select
                    label="Province/State"
                    variant="outlined"
                    fullWidth
                    value={formData.province}
                    onChange={handleInputChange}
                    error={!!formErrors.province}
                    helperText={formErrors.province}
                  >
                    <MenuItem value="Select Province/State">
                      Select Province/State
                    </MenuItem>
                  </CustomTextField>
                </FormGroup>
                <FormGroup>
                  <CustomTextField
                    name="zipCode"
                    label="Zip/Postal Code"
                    variant="outlined"
                    placeholder="ex. 098098"
                    fullWidth
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    error={!!formErrors.zipCode}
                    helperText={formErrors.zipCode}
                    
                  />
                </FormGroup>
              </Container2>

              <FormGroup>
                <CustomTextField
                  name="addressLine1"
                  label="Address Line 1"
                  variant="outlined"
                  placeholder="Address line 1"
                  fullWidth
                  value={formData.addressLine1}
                  onChange={handleInputChange}
                  error={!!formErrors.addressLine1}
                  helperText={formErrors.addressLine1}
                />
                <CustomTextField
                  name="addressLine2"
                  label="Address Line 2 (Optional)"
                  variant="outlined"
                  placeholder="Address line 2 (Optional)"
                  fullWidth
                  value={formData.addressLine2}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </FormContainer>
          </Container>
        </Body>

        <Pie>
          
            <ButtonLeft variant="contained">
              <NavLink to="/hiringStage">Go back</NavLink>
            </ButtonLeft>
          
            <ButtonRigth primary variant="contained" type="submit">
              Continue<Arrow/>
            </ButtonRigth>
        </Pie>
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
