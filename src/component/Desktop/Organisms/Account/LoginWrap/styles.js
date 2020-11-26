import styled from "styled-components";
import { UpOn } from "../../../CSS/BoxShadow";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 630px;
  height: 655px;
  border-radius: 32px;
  box-shadow: ${props => UpOn};
`;

export const LinkStyle = {
  color: "#3FB3CC",
  fontSize: "16px",
  fontWeight: "500"
};
