import styled from "styled-components";

export const Link = styled.a`
  width: max-content;
  height: auto;
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};

  text-decoration: none;
`;
