import styled from "styled-components";
import { UpOnShadow } from "../../../CSS/BoxShadow";

export const Container = styled.div`
  display: grid;
  gap: 30px;
  grid-template: 48px 1fr 23px / 1fr;
  place-content: center;
  width: 580px;
  height: 655px;
  padding: 50px 96px 30px 96px;
  border-radius: 32px;
  box-sizing: border-box;
  box-shadow: ${UpOnShadow};
  background: #efefef;
`;

export const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ImgStyle = {
  width: "224px",
  height: "48px"
};

export const LinkStyle = {
  color: "#3FB3CC",
  fontSize: "16px",
  fontWeight: "500"
};
