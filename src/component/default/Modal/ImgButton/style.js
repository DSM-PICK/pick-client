import styled, { css } from "styled-components";

export const Container = styled.button`
  border: 1px solid ${props => props.color};
  color: ${props => props.color};
  border-radius: 18px;
  font-size: 20px;
  padding: 10px;
  width: 90px;
  background: none;
  display: flex;
  justify-content: space-around;
  align-items: center;

  ${props =>
    props.shadow &&
    "box-shadow: 0px 2px 10px 1px rgb(0, 0, 0, 0.16);border:none;"}
  & + & {
    margin-left: 5px;
  }

  ${props =>
    props.active &&
    css`
      color: white;
      background-color: ${props.color};
    `}
`;
