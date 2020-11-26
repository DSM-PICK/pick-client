import styled from "styled-components";
import { UpOn } from "../../../CSS/BoxShadow";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 630px;
  height: 763px;
  padding: 80px 88px 30px 88px;
  border-radius: 32px;
  box-sizing: border-box;
  box-shadow: ${UpOn};
  background: #efefef;
`;

export const ImgStyle = {
  width: "246px",
  height: "54px"
};

export const LinkStyle = {
  color: "#3FB3CC",
  fontSize: "16px",
  fontWeight: "500"
};
