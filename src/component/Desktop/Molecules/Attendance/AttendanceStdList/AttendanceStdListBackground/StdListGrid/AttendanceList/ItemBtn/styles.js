import styled, { css } from "styled-components";

export const Container = styled.button`
  position: relative;
  padding: 0;
  color: ${props => props.color || "#000000"};
  font-size: ${props => props.fontSize || "16px"};
  font-weight: ${props => props.fontWeight || "400"};
  box-sizing: border-box;
  border-radius: 8px;
  outline: none;

  ${props => {
    switch (props.text) {
      case "이동":
        return css`
          border: 1px solid #000000;
          color: #000000;
          background: #ffffff;
        `;
      case "귀가":
        return css`
          color: #ffffff;
          border: none;
          background: #406cff;
        `;
      case "무단":
        return css`
          color: #ffffff;
          border: none;
          background: #ff406e;
        `;
      case "외출":
        return css`
          color: #406cff;
          border: 1px solid #406cff;
          background: #ffffff;
        `;
      case "현체":
        return css`
          color: #ff406e;
          border: 1px solid #ff406e;
          background: #ffffff;
        `;
      case "취업":
        return css`
          color: #909090;
          border: 1px solid #c4c4c4;
          background: #ffffff;
        `;
      case "취소":
        return css`
          color: #ffffff;
          border: none;
          background: #406cff;
        `;
      default:
        return css`
          border: 1px solid #c4c4c4;
          background: #ffffff;
        `;
    }
  }};

  &:hover {
    ${props =>
      props.text !== "취업" &&
      css`
        cursor: pointer;
      `}
  }

  &:focus,
  &:active {
    & > :nth-child(1) {
      opacity: ${props => (props.isOpen ? 1 : 0)};
      visibility: ${props => (props.isOpen ? "visible" : "hidden")};
    }
  }

  & > :nth-child(1) {
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }
`;

export const WriteMemoWrap = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  outline: none;
  color: #ffffff;
  border: none;
  background: #406cff;
  font-size: 16px;
  text-align: center;
  box-sizing: border-box;

  display: ${props => (props.isWriteMemo ? "inline-block" : "none")};
`;

export const Wrap = styled.div`
  position: absolute;
  top: ${props => (props.index > 17 ? "-109.25px" : "-1.25px")};
  left: -1.25px;
  z-index: 3;
  width: 100%;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  background: #ffffff;
`;

export const MemoWrap = styled.div`
  position: absolute;
  top: ${props => (props.index > 17 ? "-109.25px" : "23.75px")};
  left: -1.25px;
  z-index: 4;
  width: 143px;
  height: 85px;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  background: #ffffff;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.current === props.value ? 0 : 1)};
  height: 24px;

  &:hover {
    font-weight: ${props => (props.isOpen ? "bold" : "400")};
  }

  transition: all 0.1s ease-in-out;
`;
