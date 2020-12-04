import styled from "styled-components";
import {
  BottomShadow,
  DownOnShadow,
  NormalShadow,
  UpOnShadow
} from "../../../../CSS/BoxShadow";

export const Container = styled.form`
  display: grid;
  grid-template: 85px 85px 1fr 70px / 1fr;
  width: 100%;
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
  margin: "14px 0",
  padding: "0 30px",
  color: "#555555",
  fontSize: "16px",
  fontWeight: "500",
  borderRadius: "32px",
  background: "#efefef",
  boxShadow: "Bottom"
};

export const LabelStyle = {
  isCenter: true,
  padding: "14px 0",
  color: "#FF5959",
  fontSize: "15px",
  fontWeight: "600",
  visibility: "visible"
};

export const NextButtonStyle = {
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
