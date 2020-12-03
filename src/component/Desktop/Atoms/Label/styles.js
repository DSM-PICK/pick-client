import styled, { css } from "styled-components";

export const Container = styled.label`
  display: flex;
  visibility: ${props => props.visibility};
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};

  ${props =>
    props.isCenter &&
    css`
      align-items: flex-start;
      justify-content: center;
    `};
`;
