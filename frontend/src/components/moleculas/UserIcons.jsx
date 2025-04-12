import { useState } from "react"
import styled from "styled-components"
import photoProfile from "../../assets/photoProfile.avif"
import photoProfile2 from "../../assets/photoProfile2.jpeg"
import photoProfile3 from "../../assets/photoProfile3.avif"

export const UserIcons = () => {
    const [selectedUserIcon, setSelectedUserIcon] = useState("USER1")
  
    const userIcons = {
      USER1: photoProfile,
      USER2: photoProfile2,
      USER3: photoProfile3,
      
    }
  
    return (
      <CurrencyWithIcon>
        <CurrencySelect value={selectedUserIcon} onChange={(e) => setSelectedUserIcon(e.target.value)}>
          <option value="USER1">Jesus</option>
          <option value="USER2">Maria</option>
          <option value="USER3">Jose</option>
        </CurrencySelect>
        <CurrencyFlag src={userIcons[selectedUserIcon]} alt={selectedUserIcon} />
      </CurrencyWithIcon>
    )
}

const CurrencyWithIcon = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
    gap: 10px;
` 
const CurrencyFlag = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
`
const CurrencySelect = styled.select`
    padding: 10px;
    border-radius: 10px;
    font-size: 16px;
    border: none;
    width: 250px;
`