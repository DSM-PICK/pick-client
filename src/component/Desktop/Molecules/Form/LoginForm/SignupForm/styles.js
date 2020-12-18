import styled from "styled-components";

export const Container = styled.form`
  display: grid;
  grid-template: 85px 85px 85px 1fr 70px / 1fr;
  width: 100%;
`;

export const InputStyle = {
  isCenter: true,
  margin: "14px 0",
  padding: "0 30px",
  color: "#555555",
  fontSize: "16px",
  fontWeight: "500",
  borderRadius: "32px",
  background: "#efefef",
  boxShadow: "DownOn"
};

export const LabelStyle = {
  isCenter: true,
  padding: "14px 0",
  color: "#FF5959",
  fontSize: "15px",
  fontWeight: "600",
  visibility: "visible"
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
