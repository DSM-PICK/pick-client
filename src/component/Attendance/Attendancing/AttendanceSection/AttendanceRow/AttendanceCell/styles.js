import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 80%;
`;

export const ValueButton = styled.button`
  width: 100%;
  min-height: 28px;
  font-size: ${props => (props.text.length > 5 ? "16px" : "20px")};
  background: ${props =>
    props.text === "출석"
      ? "#ffffff"
      : props.text === "취업"
      ? "#bbbbbb"
      : "#2764A7"};
  color: ${props => (props.text === "출석" ? "#2764A7" : "#ffffff")};
  border: ${props =>
    !props.state && props.text !== "출석" ? "none" : "1px solid #707070"};
  border-radius: 12px;
  box-sizing: border-box;
  outline: none;
  transition: 0.3s ease-in-out;

  &:hover {
    cursor: ${props => props.text !== "취업" && "pointer"};
  }

  ul {
    position: absolute;
    left: 0;
    width: 100%;
    background: white;
    color: black;
    border: 1px solid #707070;
    border-radius: 12px;
    ${props =>
      props.index > 5
        ? css`
            top: -123px;
            border-bottom: none;
          `
        : css`
            top: 0px;
            border-top: none;
          `}
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s ease-in-out;

    box-sizing: border-box;

    li {
      position: relative;
      z-index: 2;
      display: flex;
      width: 100%;
      height: 28px;
      padding: 2px 0;
      color: black;
      align-items: center;
      justify-content: center;
    }
  }

  ${props =>
    props.state && props.index > 5
      ? css`
          &:focus,
          &:active {
            background: white !important;
            color: none;
            border-radius: 0 0 12px 12px;
            border-top: none;
            ul {
              transform: translate(0, -26px);
              opacity: 1;
              visibility: visible;
              border-bottom: none;
            }
            ul:nth-child(1) {
              border-radius: 12px 12px 0 0;
            }
          }
        `
      : props.state && props.index <= 5
      ? css`
          &:focus,
          &:active {
            background: white !important;
            color: none;
            border-radius: 12px 12px 0 0;
            border-bottom: none;
            ul {
              transform: translate(0, 26px);
              opacity: 1;
              visibility: visible;
              border-top: none;
            }
            ul:nth-child(1) {
              border-radius: 0 0 12px 12px;
            }
          }
        `
      : ""}
`;

export const Wrap = styled.ul`
  position: absolute;
`;

export const Item = styled.li`
  display: flex;
`;
