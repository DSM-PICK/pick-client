import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 16px;
  grid-template-rows: 40px 1fr 40px;
  width: calc(100% - 40px);
  height: calc(100% - 24px);
  padding: 12px 20px;
`;

export const BackgroundButtonWrap = styled.div`
  width: 100%;
  height: 100%;
`;
export const ButtonCSS = {
  width: "100%",
  height: "100%",
  color: "#ffffff",
  borderRadius: "12px",
  background: "#406CFF",

  hoverBackground: "#2D54D5",
  activeBackground: "#2849b5"
};
