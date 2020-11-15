import styled from "styled-components";

export const Container = styled.input`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: none;
  border: ${props => props.border};
  border-radius: ${props => props.radiusSize};
  background: ${props => props.background};

  color: #333336;
  font-size: 15px;

  outline: none;
`;
