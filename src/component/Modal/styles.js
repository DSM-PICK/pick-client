import styled from "styled-components";

export const Container = styled.div`
  width: ${props => (props.width ? props.width : "auto")};
  border-radius: ${props => props.radius};
  background: ${props => props.background};
`;
