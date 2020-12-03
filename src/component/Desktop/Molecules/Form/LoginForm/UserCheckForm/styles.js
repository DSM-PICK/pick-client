import styled from "styled-components";
import {
  BottomShadow,
  DownOnShadow,
  NormalShadow,
  UpOnShadow
} from "../../../../CSS/BoxShadow";

export const Container = styled.form`
  display: grid;
  gap: 32px;
  grid-template: 66px 66px 66px 1fr 80px / 1fr;
  width: 100%;
  height: 442px;
`;

export const NextButton = styled.button`
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
      : props.boxShadow === "DownOn"
      ? DownOnShadow
      : BottomShadow};

  &:hover {
    cursor: pointer;
  }
`;

export const InputStyle = {
  padding: "20px 40px",
  color: "#555555",
  fontSize: "18px",
  fontWeight: "500",
  borderRadius: "32px",
  background: "#efefef",
  boxShadow: "Bottom"
};

export const NextButtonStyle = {
  padding: "25px 40px",
  color: "#333333",
  fontSize: "20px",
  fontWeight: "bold",
  borderRadius: "32px",
  background: "linear-gradient(135deg, #e3e3e3, #fbfbfb)",
  boxShadow: "UpOn"
};

export const SubmitStyle = {
  padding: "20px 40px",
  color: "#333333",
  fontSize: "20px",
  fontWeight: "bold",
  borderRadius: "32px",
  background: "linear-gradient(135deg, #e3e3e3, #fbfbfb)",
  boxShadow: "UpOn"
};
