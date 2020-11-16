import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-row: 1 / 2;
  grid-template: 1fr 3fr / 1fr;

  padding: 60px 0 0 0;
`;

export const MainWrap = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template: 1fr / 1fr 1fr;
`;
