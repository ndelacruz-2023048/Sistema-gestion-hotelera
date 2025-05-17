import React, { useRef } from 'react'
import styled from 'styled-components'
import photoProfile from '../../assets/photoProfile.avif'
import { Icon } from "@iconify/react/dist/iconify.js"

export const DetailUser = () => {
    const fileInputRef = useRef(null)

  const handleIconClick = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Archivo seleccionado:", file.name)
    }
  }

  return (
    <Container>
        <h1>User Details</h1>
        <Square>
            <Image src={photoProfile}/>
            <IconD onClick={handleIconClick}>
                <Icon icon="material-symbols-light:photo-camera-rounded"/>
            </IconD>
            <LittleData>
                <h2>Carlos Gomez</h2>
                <p>ID: 2023522</p>
                <p>ADMIN</p>
                <p>Cuidad de Gautemala, Guatemala</p>
            </LittleData>
            <input 
              ref={fileInputRef}
              type="file" 
              style={{ display: 'none' }}  
              onChange={handleFileChange} 
            />
        </Square>
        <SquareB>
            <Top>
                <h2>Informacion Personal</h2>
                <BTN>
                    <Icon icon="tabler:edit"/>
                    <p>Edit</p>
                </BTN>
                
            </Top>
            <Bar />
            <Data>
                <Info>
                    <h3>Name</h3>
                    <p>dasdad</p>
                </Info>
                <Info>
                    <h3>Surname</h3>
                    <p>dasdad</p>
                </Info>
                <Info>
                    <h3>Date of Birth</h3>
                    <p>dasdad</p>
                </Info>
                <Info>
                    <h3>Email Address</h3>
                    <p>dasdad</p>
                </Info>
                <Info>
                    <h3>Phone Number</h3>
                    <p>dasdad</p>
                </Info>
                <Info>
                    <h3>User Role</h3>
                    <p>dasdad</p>
                </Info>
            </Data>
        </SquareB>
        <SquareB>
            <Top>
                <h2>Address</h2>
                <BTN>
                    <Icon icon="tabler:edit"/>
                    <p>Edit</p>
                </BTN>
            </Top>
            <Bar />
            <Data>
                <Info>
                    <h3>Country</h3>
                    <p>dasdad</p>
                </Info>
                <Info>
                    <h3>Full Address</h3>
                    <p>dasdad</p>
                </Info>
            </Data>
        </SquareB>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 100%;
    width: 100%;
    color: ${({ theme }) => theme.color};
    overflow-y: auto;
    max-height: 80vh;
`

const Square = styled.div`
    display: flex;
    margin-left: 2%;
    margin-right: 2%;
    width: 95%;
    height: auto;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colorBackground};
    align-items: center;
    position: relative;
`

const SquareB = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2%;
    margin-right: 2%;
    width: 95%;
    height: auto;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colorBackground};
`

const Image = styled.img`
    width: 140px;
    height: 140px;
    object-fit: cover;
    border-radius: 50%;
    border: 1.5px solid #28364b;
    margin: 2%;
`

const IconD = styled.div`
    font-size: 20px;
    color: ${({ theme }) => theme.color};
    width: 30px;
    height: 30px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colorBackground};
    border-radius: 15px;
    border:1px solid rgb(138, 138, 138);
    position: absolute; 
    left: 9%;
    top: 65%;
    z-index: 90;
    display: flex;
    align-items: center;
    justify-content: center; 
`

const LittleData = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2%;

    h2, p{
        margin: 3%;
        margin-left: 0%;
    }

    h2{
        color: ${({ theme }) => theme.infoText};
    }
`

const Top = styled.div`
    display: flex;
    margin: 2%;
    margin-bottom: 0;
    justify-content: space-between;

    h2{
        color: ${({ theme }) => theme.infoText};  
    }
`

const BTN = styled.button`
    display: flex;
    background-color: ${({ theme }) => theme.infoText}; 
    color: ${({ theme }) => theme.colorBackground};
    border-radius: 15px;
    align-items: center;
    height: 50px;
    font-size: 15px;
    padding: 10px;
    font-weight: bold;
    
    &:hover{
        background-color: ${({ theme }) => theme.colorBackground};
        color: ${({ theme }) => theme.infoText}; 
        cursor: pointer;
        transition: 0.5s;
    }

    svg {
        font-size: 25px; 
        margin-right: 8px;
    }
`

const Bar = styled.div`
    display: flex;
    height: 1px;
    width: 95%;
    background-color:rgb(196, 196, 196);
    margin-left: 2%;
    margin-right: 2%;
`

const Data = styled.div`
    display: grid;
    width: 60%;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 2%;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 5%;
    justify-content: flex-start;
    align-items: flex-start; 

    h3{
        color:rgb(184, 184, 184);
    }
    
    p{
        color: ${({ theme }) => theme.color};
    }

    h3, p{
        margin: 0;
    }
`