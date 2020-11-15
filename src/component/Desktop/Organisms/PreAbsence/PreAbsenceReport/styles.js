import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LeftWrap = styled.div`
  display: grid;
  justify-content: center;
  grid-template: 20px 1fr 32px / 1fr;

  grid-row: 1 / 3;

  border: 3px solid pink;
`;

export const RightTopWrap = styled.div`
  display: grid;
  grid-row: 1 / 2;
  justify-content: center;

  border: 3px solid pink;
`;

export const RightBottomWrap = styled.div`
  display: grid;
  grid-row: 2 / 3;
  justify-content: center;

  border: 3px solid pink;
`;

export const ListWrap = styled.div`
  display: flex;
  width: 137px;
  height: 227px;
  flex-direction: column;
`;
