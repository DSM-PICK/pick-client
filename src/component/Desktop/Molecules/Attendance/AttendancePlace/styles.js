import styled from "styled-components";

export const Container = styled.div``;

export const LableHeader = styled.div`
  display: grid;
  column-gap: 12px;
  grid-template-columns: 110px 1fr;
  align-items: center;
  margin: 0 0 7px 0;
`;

export const LabelCSS = {
  color: "#000000",
  fontSize: "16px",
  fontWeight: "500"
};

export const BackgroundCSS = {
  width: "100%",
  height: "calc(100% - 22px)",
  borderRadius: "12px",
  background: "#ffffff",
  boxShadow: "0px 1px 1px 0px rgba(144, 144, 144, 0.2)"
};
