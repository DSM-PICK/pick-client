import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;

export const StdListHeader = styled.div`
  width: 100%;
  height: 24px;
`;

export const StdListBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 24px);
`;

export const StdListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  width: 100%;
  height: 100%;
`;
