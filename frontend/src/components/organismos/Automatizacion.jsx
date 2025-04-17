import { styled } from "styled-components"
import { DetailItem } from "../moleculas/DetailsItem";
import { RiArrowDropDownLine } from "@remixicon/react";
import { RiGitCommitLine } from "@remixicon/react";
import { RiFlashlightFill } from "@remixicon/react";
import { useState } from "react";

export const Auto = ()=> {
    const [open, setOpen] = useState(false)
    return (
        <Container onClick={()=> setOpen(!open)}>
          <Header>
            <Title>Automatización
                <TitlePart2 open={!open}>
                    <span style={{ margin: '0 33px'}}><RiFlashlightFill size={'15px'}/> Ejecuciones de regla</span>
                </TitlePart2>
            </Title>
            <SettingsButton>
              <StyledArrow $isOpen={open} size={'18px'}/>
            </SettingsButton>
          </Header>
          <Content open={open}>
            <DetailItem label={"Ejecuciones de reglas recientes"}>
                <span style={{ color: '#6B778C', fontSize: '13px'}}>No hay ejecuciones de reglas recientes para esta incidencia.</span>
            </DetailItem>
          </Content>
        </Container>
      )
}

const Container = styled.div`
  background-color: ${({theme})=>theme.eSection};
  border-radius: 3px;
  margin-top: 24px;
  border: 0.5px solid ${({theme})=>theme.eSBorder};
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
  display: flex;
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

const TitlePart2 = styled.div`
    display: ${({ open }) => (open ? "block" : "none")};
`

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