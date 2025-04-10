import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 16px 0;
`;

const Label = styled.div`
  color: #6B778C;
  font-size: 12px;
  margin-bottom: 4px;
`;

const Content = styled.div`
  color: #172B4D;
  font-size: 14px;
`;

export const DetailItem = ({ label, children }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Content>{children}</Content>
    </Container>
  );
};