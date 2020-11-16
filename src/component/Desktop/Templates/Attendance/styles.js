import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const MainWrap = styled.div`
  display: grid;
  grid-gap: 120px;
  grid-template: repeat(4, 1fr) / 3fr 2fr;
  height: 100%;
  padding: 0 10%;
`;
