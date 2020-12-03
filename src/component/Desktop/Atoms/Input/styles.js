import styled from "styled-components";
import { DownOnShadow, NormalShadow, UpOnShadow } from "../../CSS/BoxShadow";

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
      ? NormalShadow
      : props.boxShadow === "UpOn"
      ? UpOnShadow
      : DownOnShadow};

  &::placeholder {
    color: #999999;
    font-size: 18px;
  }

  &:hover {
    cursor: ${props => props.type === "submit" && "pointer"};
  }
`;
