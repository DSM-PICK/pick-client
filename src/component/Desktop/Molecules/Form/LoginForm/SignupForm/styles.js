import styled from "styled-components";

export const Container = styled.form`
  display: grid;
  gap: 32px;
  grid-template: 66px 66px 66px 1fr 80px / 1fr;
  width: 100%;
  height: 442px;
`;

export const InputStyle = {
  padding: "20px 40px",
  color: "#555555",
  fontSize: "18px",
  fontWeight: "500",
  borderRadius: "32px",
  background: "#efefef",
  boxShadow: "DownOn"
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
