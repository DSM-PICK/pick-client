import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const MainWrap = styled.div`
  display: grid;
  gap: 0 40px;
  grid-template-columns: 9fr 5fr;
  box-sizing: border-box;

  width: 100%;
  height: 100%;
  padding: 40px 10%;
`;

export const SubWrap = styled.div`
  display: grid;
  gap: 40px 0;
  grid-template-rows: 1fr 1fr;
`;
