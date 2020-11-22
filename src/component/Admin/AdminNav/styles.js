import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  min-width: 220px;
  height: 100%;
  background: #202831;
  align-items: center;
  flex-direction: column;
  z-index: 4;
`;

export const ButtonWrap = styled.div`
  position: absolute;
  top: 42%;
  left: 20px;
`;

export const Button = styled.button`
  border-radius: 18px;
  font-size: 20px;
  padding: 10px;
  border: none;
  width: 90px;
  color: rgb(100, 177, 231);
  background: rgb(19, 23, 26);

  & + & {
    margin-left: 10px;
  }
`;
