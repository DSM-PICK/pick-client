import styled, { css } from "styled-components";

export const Container = styled.div``;

export const SwitchWrap = styled.div`
  border: 1px solid white;
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin: 0 auto;
  margin-top: 20px;
`;

export const hr = styled.div`
  border-left: 1px solid black;
`;

export const SwitchItem = styled.div`
  text-align: center;
  font-size: 35px;
  flex: 1;
  color: white;

  ${(props) =>
    props.isActive &&
    css`
      color: black;
      background: white;
    `}
`;

export const TeacherBoxWrap = styled.div`
  display: flex;
  margin: 0 auto;
  font-size: 40px;
  justify-content: space-around;
  color: white;
  margin-top: 30px;
`;
