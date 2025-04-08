import styled from "styled-components"

export const Label = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.textSecondary || "#ccc"};
`