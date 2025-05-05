import { styled } from "styled-components"
import { DetailItem } from "../moleculas/DetailsItem";
import { Tag } from "../atomos/Tag";
import { RiArrowDropDownLine } from "@remixicon/react";
import { RiGitBranchLine } from "@remixicon/react";
import { RiGitCommitLine } from "@remixicon/react";
import { useState } from "react";

export const Details = ()=> {
    const [open, setOpen] = useState(false)
    return (
        <Container onClick={()=> setOpen(!open)}>
          <Header>
            <Title>Detalles</Title>
            <SettingsButton>
              <StyledArrow $isOpen={open} size={'18px'}/>
            </SettingsButton>
          </Header>
          <Content open={open}>
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
              <Tag variant={'purple'}>SCRUM-11 Home Hotel</Tag>
            </DetailItem>
            <DetailItem label="Team">
              <span style={{ color: '#6B778C' }}>Ninguno</span>
            </DetailItem>
            <DetailItem label={"Sprint"}>
              <a href="" style={{ color: '#0044ff' }}> Tablero sprint 3</a>
            </DetailItem>
            <DetailItem label={"Story point estimate"}>
              <span style={{ color: '#6B778C' }}>Ninguno</span>
            </DetailItem>
            <DetailItem label={"Desarrollo"}>
              <RiGitBranchLine style={{color: '#0044ff'}}/>
              <a href="" style={{ color: '#0044ff' }}> Tablero sprint 3</a>
              <Icon/>
              <a href="" style={{ color: '#0044ff' }}> Tablero sprint 3</a>
            </DetailItem>
            <DetailItem label="Informador">
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Avatar>NH</Avatar>
                <span>Nery Javier de la Cruz Humil</span>
              </div>
            </DetailItem>
          </Content>
        </Container>
      )
}

const Container = styled.div`
  background-color: ${({theme})=>theme.eSection};
  border-radius: 5px;
  margin-top: 24px;
  border: 0.1px solid ${({theme})=>theme.eSBorder};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme})=>theme.color};
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
  display: ${({ open }) => (open ? "block" : "none")};
`;

const Avatar = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #207951;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
`;

const StyledArrow = styled(RiArrowDropDownLine)`
  margin-left: 8px;
  color: #474d61;
  transition: transform 0.2s ease; /* Animación suave */
  transform: ${props => (props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`

const Icon = styled(RiGitCommitLine)`
  margin-left: 8px;
  color: #0044ff;
  transition: transform 0.2s ease; /* Animación suave */
  transform: rotate(90deg);
`