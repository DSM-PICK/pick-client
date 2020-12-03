import styled from "styled-components";

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};

  text-decoration: none;
`;
