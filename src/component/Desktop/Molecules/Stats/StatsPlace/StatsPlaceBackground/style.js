import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 22px;
  grid-template-rows: 32px 20px 1fr;
  justify-items: center;
  width: calc(100% - 20px);
  height: calc(100% - 24px);
  padding: 12px 10px;
`;

export const ButtonWrap = styled.div`
  width: 160px;
  height: 32px;
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

export const FloorWrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

export const FloorTextButton = styled.button`
  color: ${props => (props.isClicked ? "#406CFF" : "#000000")};
  font-size: 14px;
  font-weight: 500;
  border: none;
  outline: none;
  background: none;

  &:hover {
    color: #406cff;
    cursor: pointer;
  }
`;
