import styled from "styled-components";

export const Container = styled.label`
  width: ${props => props.width || "auto"};
  height: ${props => props.height || "auto"};
  color: ${props => props.color || "#000000"};
  font-size: ${props => props.fontSize || "16px"};
  font-weight: ${props => props.fontWeight || "400"};
`;
