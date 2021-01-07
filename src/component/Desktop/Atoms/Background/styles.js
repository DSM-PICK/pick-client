import styled from "styled-components";

export const Container = styled.div`
  display: ${props => props.display || "flex"};
  align-items: ${props => props.alignitems || "baseline"};
  justify-content: ${props => props.justifycontent || "baseline"};
  width: ${props => props.width || "auto"};
  height: ${props => props.height || "auto"};
  border-radius: ${props => props.borderRadius || "0"};
  background: ${props => props.background || "#ffffff"};
`;
