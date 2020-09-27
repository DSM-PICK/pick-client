import styled from "styled-components";

export const Container = styled.div`
  background-color: #202831;
  display: flex;
  width: 360px;

  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  padding: 20px 10px;
  border-radius: 26px;
  text-align: center;
`;

export const Title = styled.div`
  color: white;
  font-size: 18px;
`;

export const Sub = styled.div`
  color: #e2e0e0;
  font-size: 18px;

  &.active {
    color: white;
  }
`;
