import styled, { css } from "styled-components";
import { DownOn, Normal, UpOn } from "../../CSS/BoxShadow";

export const Input = styled.input`
  padding: ${props => props.padding};
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  border: none;
  outline: none;
  border-radius: ${props => props.borderRadius};
  box-sizing: border-box;
  background: ${props => props.background};
  box-shadow: ${props =>
    props.boxShadow === "Normal"
      ? Normal
      : props.boxShadow === "UpOn"
      ? UpOn
      : DownOn};

  &::placeholder {
    color: #999999;
    font-size: 18px;
  }
`;
