import { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import {Description} from './modalEvents/Description'
import { useUsers } from "../hooks/useUsers";

function ModalEvents({ togglePopup }) {
    const [selectedOption, setSelectedOption] = useState(null)
    const [designatedUser, setDesignatedUser] = useState(null)
    const { users, isLoading, error } = useUsers()
    if (isLoading) {
      return <p>Cargando eventos...</p>;
    }
    
    if (error) {
        return <p>Error al cargar los eventos: {error}</p>;
    }
    return (
      <Container>
        <PopupStyle>
          <Up>
            <OptionRow>
              <OptionBox
                isActive={selectedOption === "boda"}
                onClick={() => setSelectedOption("boda")}
              >
                Boda
              </OptionBox>
              <OptionBox
                isActive={selectedOption === "cumple"}
                onClick={() => setSelectedOption("cumple")}
              >
                Cumpleaños
              </OptionBox>
              <OptionBox
                isActive={selectedOption === "graduacion"}
                onClick={() => setSelectedOption("graduacion")}
              >
                Graduacion
              </OptionBox>
              <OptionBox
                isActive={selectedOption === "conf"}
                onClick={() => setSelectedOption("conf")}
              >
                Conferencias
              </OptionBox>
              <OptionBox
                isActive={selectedOption === "reuniones"}
                onClick={() => setSelectedOption("reuniones")}
              >
                Reuniones
              </OptionBox>
              <OptionBox
                isActive={selectedOption === "otros"}
                onClick={() => setSelectedOption("otros")}
              >
                Otro
              </OptionBox>
            </OptionRow>
            <CloseIcon icon="mdi:close" onClick={togglePopup} />
          </Up>
          <Line></Line>
          <Cont>
            <Description
              users={users}
              designatedUser={designatedUser}
              setDesignatedUser={setDesignatedUser}
            />
          </Cont>
          <Line></Line>
          <Blue>
            <Clip icon="flowbite:paper-clip-outline" />
            <button>Enviar</button>
          </Blue>
        </PopupStyle>
      </Container>
    )
}

export default ModalEvents

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  backdrop-filter: blur(25px);
  height: 100vh;
  width: 100%;
  z-index: 100;
  top: 0;
  right: 0;
`

const PopupStyle = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  height: 500px;
  width: 45%;
  border-radius: 15px;
  transform: translate(-50%, -30%);
  padding: 0px;
  background-color: ${({theme})=>theme.bgSidebar};
  color: rgb(165, 165, 165);
  z-index: 1000;
  display: flex;
  flex-direction: column;
`;

const Up = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  padding: 0px;
  margin-bottom: 0px;
  border-radius: 15px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme})=>theme.bgSidebar};
`;

const CloseIcon = styled(Icon)`
  color: rgb(165, 165, 165);
  font-size: 30px;
  cursor: pointer;
  margin-right: 3%;
  transition: 0.5s;
  padding-bottom: 0px;
  margin-bottom: 0px;

  &:hover {
    color: ${({theme})=>theme.colorHover};
  }

`

const OptionRow = styled.div`
  display: flex;
  gap: 0px;
  background-color: ${({theme})=>theme.bgSidebar};
  padding: 10px;
  padding-bottom: 0px;
  margin-bottom: 0px;
`

const OptionBox = styled.div`
  background-color: ${({theme})=>theme.bgSidebar});
  color: ${(props) => (props.isActive ? "${({theme})=>theme.colorHover}" : "${({theme})=>theme.color}")};
  padding: 10px 20px;
  border-radius: 10px 10px 0 0;
  border-bottom: ${(props) =>
    props.isActive ? "5px solid rgb(0, 76, 255)" : "none"};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${({theme})=>theme.colorHover};
  }
`

const Line = styled.div`
  height: 2px;
  width: 100%;
  background-color: rgb(148, 148, 148);
`

const Cont = styled.div`
    height: 60%;
    width: 100%;
`

const Blue = styled.div`
  display: flex;
  background-color: ${({theme})=>theme.bgSidebar};
  height: 20%;
  justify-content: flex-end;
  align-items: center;
  border-radius: 0 0 10px 15px;

  button {
    height: 60%;
    width: 20%;
    font-size: 20px;
    color: rgb(165, 165, 165);
    padding: 10px;
    margin-right: 5%;
    border: none;
    border-radius: 10px;
    background-color: rgb(4, 54, 170);
  }
`

const Clip = styled(Icon)`
  color: rgb(165, 165, 165);
  font-size: 30px;
  cursor: pointer;
  margin-right: 3%;
  transition: 0.5s;

  &:hover {
    color: ${({theme})=>theme.colorHover};
  }

`

