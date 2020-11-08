import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  width: ${props => props.width};
  height: ${props => props.height};
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  background: ${props => props.background};

  outline: none;
`;
