import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 0.5rem 0.6rem;
  flex: 1 1 18%;
  transition: 250ms all;

  box-sizing: border-box;
  border: 1px solid transparent;
  border-right: 1px solid rgba(144, 144, 144, 0.3);
  border-bottom: 1px solid rgba(144, 144, 144, 0.3);

  &:nth-child(5n) {
    border-right: 1px solid transparent;
  }

  &:nth-child(n + 26) {
    border-bottom: 1px solid transparent;
  }

  ${props =>
    !props.isActive &&
    css`
      opacity: 0.6;
    `}

  ${props =>
    props.hover &&
    css`
      &:hover {
        border: 1px solid #ff406e;
      }
    `}
`;

export const Date = styled.div`
  font-weight: bolder;
  font-size: 1rem;
  z-index: 1;

  ${props =>
    props.isActive &&
    css`
      position: relative;
      color: white;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 23px;
        z-index: -1;
        height: 23px;
        background-color: rgba(64, 108, 255, 1);
        border-radius: 5px;
      }
      & + * {
        color: rgba(64, 108, 255, 1);
      }
    `}
`;

export const Schedule = styled.div`
  font-size: 0.8rem;
`;

export const ShowSchedule = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TeacehrWrap = styled.div`
  height: 6.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TeacerName = styled.div`
  & + & {
    margin-top: 0.5rem;
  }
  padding: 3px;
  border-radius: 8px;

  ${props =>
    props.isActive &&
    css`
      color: white;
      background-color: #406cff;

      ${props =>
        props.redMode &&
        `&:hover {
        background-color:#FF406E;

      }`}
    `}
`;
