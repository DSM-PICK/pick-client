import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 20px;
  grid-template-rows: 40px 1fr 40px;
  width: calc(100% - 40px);
  height: calc(100% - 24px);
  padding: 12px 20px;
`;

export const BackgroundHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  height: 100%;
`;

export const HeaderText = styled.p`
  display: flex;
  align-items: center;
  width: max-content;
  height: 20px;
  font-size: 16px;
`;

export const ButtonWrap = styled.div`
  width: 140px;
  height: 100%;
`;

export const HeaderButtonCSS = {
  width: "100%",
  height: "100%",
  color: "#ffffff",
  borderRadius: "12px",
  background: "#406CFF",

  hoverBackground: "#2D54D5",
  activeBackground: "#2849b5"
};

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
