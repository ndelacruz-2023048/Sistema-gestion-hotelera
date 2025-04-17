import React from 'react';
import styled from 'styled-components';
import { RiLock2Line, RiEyeFill, RiThumbUpFill, RiShareFill, RiMoreFill } from "@remixicon/react";
import { PurpleTag } from '../atomos/Tag';

export const TicketHeader = () => {
  return (
    <Header>
      <ProjectTags>
        <PurpleTag>SCRUM-11</PurpleTag>
        <RiLock2Line size={16} color="#000000" />
      </ProjectTags>
      <Actions>
        <ActionButton>
          <RiEyeFill size={16} />
          <Counter>1</Counter>
        </ActionButton>
        <ActionButton>
          <RiThumbUpFill size={16} />
        </ActionButton>
        <ActionButton>
          <RiShareFill size={16} />
        </ActionButton>
        <ActionButton>
          <RiMoreFill size={16} />
        </ActionButton>
      </Actions>
    </Header>
  )
}

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`

const ProjectTags = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

const Actions = styled.div`
  display: flex;
  gap: 16px;
  margin-left: auto;
  align-items: center;
`

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #42526E;
  display: flex;
  align-items: center;
  padding: 4px;
  
  &:hover {
    color: #172B4D;
  }
`

const Counter = styled.span`
  margin-left: 4px;
  font-size: 14px;
`
