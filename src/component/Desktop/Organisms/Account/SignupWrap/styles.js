import styled from "styled-components";
import { UpOnShadow } from "../../../CSS/BoxShadow";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 630px;
  height: 655px;
  padding: 80px 88px 30px 88px;
  border-radius: 32px;
  box-sizing: border-box;
  box-shadow: ${UpOnShadow};
  background: #efefef;
`;

export const BackButton = styled.button`
  height: ${props => props.height};
  border: none;
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  line-height: 0;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

export const ImgStyle = {
  width: "246px",
  height: "54px"
};

export const LinkStyle = {
  height: "16px",
  color: "#3FB3CC",
  fontSize: "16px",
  fontWeight: "500"
};
