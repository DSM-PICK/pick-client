import styled, { css } from "styled-components";

export const Container = styled.div`
  flex: 1 1 18%;
  text-align: center;
  margin: 0.7rem 0;
  cursor: pointer;

  ${props =>
    props.isActive &&
    css`
      opacity: 0.6;
    `}

  ${props =>
    props.isSelect &&
    css`
      position: relative;
      z-index: 0;
      color: #406cff;

      &::before {
        content: "";
        position: absolute;
        display: block;
        width: 25px;
        height: 25px;
        top: 50%;
        left: 50%;
        opacity: 0.2;
        transform: translate(-50%, -50%);
        background-color: #406cff;
        border-radius: 5px;
        z-index: -1;
      }
    `}
  ${props =>
    props.isToday &&
    css`
      position: relative;
      z-index: 0;
      color: white;
      &::before {
        content: "";
        position: absolute;
        display: block;
        width: 25px;
        height: 25px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #406cff;
        border-radius: 5px;
        z-index: -1;
      }
    `}
`;
