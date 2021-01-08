import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  column-gap: 24px;
  grid-template-columns: 6fr 11fr;
  padding: 30px 0 60px 0;
`;

export const LeftGridWrap = styled.div`
  display: grid;
  row-gap: 34px;
  grid-template-rows: 7fr 11fr;
  width: 100%;
  height: 100%;
`;

export const RightWrap = styled.div`
  width: 100%;
  height: 100%;
`;
