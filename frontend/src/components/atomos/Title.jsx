import styled from "styled-components"

export const Title = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textPrimary || "white"};
`