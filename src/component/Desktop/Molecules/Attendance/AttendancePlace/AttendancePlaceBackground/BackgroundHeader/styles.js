import styled from "styled-components";

export const Container = styled.div`
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
  width: 100%;
  height: 100%;
`;

export const HeaderText = styled.p`
  display: flex;
  align-items: center;
  width: max-content;
  height: 20px;
  font-size: 16px;
`;

export const ButtonTempWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
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
