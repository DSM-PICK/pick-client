import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: grid;
  column-gap: 10px;
  grid-template-columns: 1fr 2fr;
  padding: 30px 0;
  height: calc(100vh - 120px);
`;

export const LeftGridWrap = styled.div`
  display: grid;
  row-gap: 34px;
  width: 100%;
  height: calc(100vh - 120px);
`;

export const RightWrap = styled.div`
  width: 100%;
  height: 100%;
`;

export const ClassInfoWrap = styled.div`
  position: absolute;
  top: 50px;
  left: calc(100% + 5px);
  width: 180px;
  height: 180px;

  @media (max-width: 1480px) {
    display: none;
  }
`;
