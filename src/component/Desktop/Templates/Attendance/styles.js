import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const MainWrap = styled.div`
  display: grid;
  grid-gap: 0 120px;
  grid-template: repeat(4, 1fr) / 3fr 2fr;
  height: calc(100% - 60px);
  padding: 0 10%;
`;
