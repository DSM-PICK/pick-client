import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: grid;
  column-gap: 10px;
  grid-template-columns: 11fr 22fr;
  padding: 30px 0;
`;

export const LeftGridWrap = styled.div`
  display: grid;
  row-gap: 34px;
  width: 100%;
  height: calc(100vh - 120px);
`;

export const LeftAdditionalGridWrap = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100%;
`;

export const RightWrap = styled.div`
  width: 100%;
  height: 100%;
`;
