import styled from "styled-components";
import { UpOnShadow } from "../../../CSS/BoxShadow";

export const Container = styled.div`
  display: grid;
  grid-template: 187px 1fr 72px / 1fr;
  place-content: center;
  width: 550px;
  height: 582px;
  padding: 0 77px;
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
  width: "210px",
  height: "47px"
};

export const LinkStyle = {
  color: "#3FB3CC",
  fontSize: "16px",
  fontWeight: "500",
  background: "none"
};
