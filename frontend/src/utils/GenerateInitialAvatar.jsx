import styled from "styled-components";

export const generateInitialsAvatar = (name, surname) => {
    if (!name) return null;
    const nameInitial = name.charAt(0).toUpperCase();
    const surnameInitial = surname ? surname.charAt(0).toUpperCase() : '';
    const backgroundColor = getRandomColor(); // Necesitarías una función para generar un color aleatorio
    return (
      <AvatarContainer style={{ backgroundColor }}>
        <Initial>{nameInitial}{surnameInitial}</Initial>
      </AvatarContainer>
    );
  };
  
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
const AvatarContainer = styled.div`
    width: 50px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
  `;
  
  const Initial = styled.span`
    font-size: 1.2em;
  `;