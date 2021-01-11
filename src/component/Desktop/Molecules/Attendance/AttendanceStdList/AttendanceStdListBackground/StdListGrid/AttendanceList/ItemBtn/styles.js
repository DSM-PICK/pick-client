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
          border: 1px solid #406cff;
          color: #406cff;
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
      case "취업":
        return css`
          color: #909090;
          border: 1px solid #c4c4c4;
          background: #ffffff;
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
    & > div {
      opacity: ${props => (props.isOpen ? 1 : 0)};
      visibility: ${props => (props.isOpen ? "visible" : "hidden")};
    }
  }

  & > div {
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  & > div > li {
  }
`;

export const Wrap = styled.div`
  position: absolute;
  top: -1.25px;
  left: -1.25px;
  z-index: 3;
  width: 100%;
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
