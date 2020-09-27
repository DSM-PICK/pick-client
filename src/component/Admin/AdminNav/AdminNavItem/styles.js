import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled(NavLink)`
  display: flex;
  width: 90%;
  text-decoration: none;

  align-items: center;

  box-sizing: border-box;

  transition: all 0.3s;

  &:hover {
    cursor: pointer;
  }

  ${props =>
    props.size === "small"
      ? css`
          height: 24px;
          color: #c4c4c4;
          font-size: 1.125em;
          border-radius: 16px;
          margin-top: 20px;
          padding-left: 10px;

          &:hover {
            height: 43px;
            background: #13171a;
          }
        `
      : props.size === "middle"
      ? css`
          height: 30px;
          color: #ffffff;
          font-size: 1.375em;
          border-radius: 16px;
          padding-left: 20px;
          margin: 7.5px 0;

          &:hover {
            height: 49px;
            color: #64b1e7;
            background: #13171a;
          }
        `
      : props.size === "big" &&
        css`
          height: 75px;
          border-radius: 22px;
          margin: 5px 0;

          &::after {
            content: " ";
            width: 100%;
            height: 100%;
            background: ${props => props.imglink && `url(${props.imglink})`}
              no-repeat center;
          }

          &:hover {
            background: #13171a;
          }
        `};

  ${props =>
    props.text === "로그아웃" &&
    css`
      color: #e81a95;
      margin: auto 0 20px 0;

      &:hover {
        color: #a73c7c;
      }
    `}
`;
