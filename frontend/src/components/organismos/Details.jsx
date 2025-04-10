import { styled } from "styled-components"
import { DetailItem } from "../moleculas/DetailsItem";
import { PurpleTag } from "../atomos/Tag";
import { RiArrowDropDownLine } from "@remixicon/react";

export const Details = ()=> {
    return (
        <Container>
          <Header>
            <Title>Detalles</Title>
            <SettingsButton>
              <RiArrowDropDownLine size={16} />
            </SettingsButton>
          </Header>
          <Content>
            <DetailItem label="Persona asignada">
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Avatar>NH</Avatar>
                <span>Nery Javier de la Cruz Humil</span>
              </div>
            </DetailItem>
            <DetailItem label="Etiquetas">
              <span style={{ color: '#6B778C' }}>Ninguno</span>
            </DetailItem>
            <DetailItem label="Principal">
              <PurpleTag>SCRUM-11 Home Hotel</PurpleTag>
            </DetailItem>
            <DetailItem label="Team">
              <span style={{ color: '#6B778C' }}>Ninguno</span>
            </DetailItem>
          </Content>
        </Container>
      )
}

const Container = styled.div`
  background-color: #FFFFFF;
  border-radius: 3px;
  margin-top: 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  border-bottom: 1px solid #DFE1E6;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #172B4D;
`;

const SettingsButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #42526E;
  
  &:hover {
    color: #172B4D;
  }
`;

const Content = styled.div`
  padding: 16px;
`;

const Avatar = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #0052CC;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
`;