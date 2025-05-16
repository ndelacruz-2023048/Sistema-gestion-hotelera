import React from 'react'
import styled from 'styled-components'
import photoProfile from '../../../assets/photoProfile.avif'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useNavigate } from 'react-router'
import { useLogout } from '../../../hooks/useLogout'

export const ModalUser = ({ togglePopup }) => {
  const navigate = useNavigate()
  const { logout, isLoadingLogout} = useLogout()

  const handleSettingsClick = () => {
    navigate('/user');
    togglePopup()
  }

  const handleLogoutClick  = ()=> {
    logout()
    togglePopup()
  }
  return (
    <Container>
      <Section>
        <Data>
          <Image src={photoProfile}/>
          <p>Armando Casas</p>
          <h5>Administrador</h5>
        </Data>
        <Line></Line>
        <Cuenta>
          <Lista>
            <Dato>
              <BTN onClick={handleSettingsClick}>
                <Icon icon="majesticons:user" className='Leave'/>
                Details
              </BTN>
            </Dato>
            <Dato>
              <BTN onClick={handleLogoutClick}>
                <Icon icon="ri:logout-box-r-line" className='Leave'/>
                Log Out
                {isLoadingLogout && <div>Cerrando sesión...</div>}
              </BTN>
            </Dato>
          </Lista>
          <Line></Line>
          <p>Privacy Policy • Terms of Service</p>
        </Cuenta>
      </Section>   
    </Container>
  );
}

const Container = styled.div`
    position: absolute;
    right: 2%;
    top: 50%;
    width: 25%;
    height: auto;
    z-index: 999; 
    background-color: ${({ theme }) => theme.bgdgradient};
    border-radius: 15px;
    border: 1px solid #ffffff;
    backdrop-filter: blur(40px); 
`

const Section = styled.div`
  padding: 30px;
`

const Data = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  font-size: 50px;
  justify-content: center;
  color: ${({ theme }) => theme.color};
  font-size: 26px;

  h5, h3 {
    margin: 0;
    margin-top: 10px;
  }

  h5{
  color:${({ theme }) => theme.infoText};
  }
`

const Image = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    border: 1.5px solid #28364b;
`

const Cuenta = styled.div`
  width: 100%;
  height: auto;

  p {
    color: ${({ theme }) => theme.color};
    margin-top: 15px;
    font-size: 20px;
  }
`

const Lista = styled.ul`
  list-style-type: none;
  padding: 5px;
  color: ${({ theme }) => theme.color};
`

const Dato = styled.li`
  display: flex;

  .Nav {
    text-Decoration: none;
    width: 100%
  }
`

const Line = styled.div`
  display: flex;
  background-color:rgb(128, 128, 128);
  width: 100%;
  height: 0.5px;
  margin-top: 10px;
`

const BTN = styled.button`
  display: flex;  
  height: 50px;
  width: 70%;
  background-color:rgba(0, 0, 0, 0);
  border-radius: 0 15px 15px 0;
  font-size: 20px;
  color: ${({ theme }) => theme.color};
  align-items: center;
  gap: 5px;

  

  &:hover {
    background-color: ${({ theme }) => theme.ddw};
    transition: all 0.3s ease;
    color: ${({ theme }) => theme.color};
    cursor: pointer;
  }

  .Leave {
    color:${({ theme }) => theme.color};
    font-size: 30px;
  }
`