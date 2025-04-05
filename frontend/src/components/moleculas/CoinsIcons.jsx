import { useState } from "react"
import styled from "styled-components"
import usd from "../../assets/usd.png"
import eu from "../../assets/eu.png"
import gt from "../../assets/gt.png"


export const CoinsIcons = () => {
    const [selectedCurrency, setSelectedCurrency] = useState("USD")
  
    const currencyIcons = {
      USD: usd,
      EUR: eu,
      GT: gt,
    }
  
    return (
      <CurrencyWithIcon>
        <CurrencySelect value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GT">GT</option>
        </CurrencySelect>
        <CurrencyFlag src={currencyIcons[selectedCurrency]} alt={selectedCurrency} />
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
    width: 32px;
    height: 32px;
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