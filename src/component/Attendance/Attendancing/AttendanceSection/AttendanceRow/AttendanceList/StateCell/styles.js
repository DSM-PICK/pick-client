import styled, { css } from "styled-components";

export const Container = styled.button`
  width: 80%;
  height: 30px;
  position: relative;
  padding: 0;
  background: ${props =>
    props.isWriteMemo
      ? "#2764A7"
      : props.text === "출석"
      ? "#ffffff"
      : props.text === "취업" || props.text === "기초학력"
      ? "#bbbbbb"
      : "#2764A7"};
  color: ${props => (props.text === "출석" ? "#2764A7" : "#ffffff")};
  border: ${props =>
    !props.state && props.text !== "출석" ? "none" : "1px solid #707070"};
  border-radius: 12px;
  font-size: ${props => props.fontSize || "16px"};
  font-weight: ${props => props.fontWeight || "400"};
  box-sizing: border-box;
  outline: none;

  &:hover {
    ${props =>
      props.text !== "취업" &&
      props.text !== "기초학력" &&
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
  border-radius: 12px;
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
  top: ${props => (props.index > 13 ? "-146.25px" : "-1.25px")};
  left: -1.25px;
  z-index: 3;
  width: 100%;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  background: #ffffff;
`;

export const MemoWrap = styled.div`
  position: absolute;
  top: ${props => (props.index > 13 ? "-132.25px" : "29.75px")};
  left: -1.25px;
  z-index: 4;
  width: 180px;
  height: 130px;
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
