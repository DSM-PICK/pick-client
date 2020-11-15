import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const MainWrap = styled.div`
  display: grid;
  grid-template: repeat(5, 1fr) / 3fr 2fr;
  height: 100%;
  padding: 0 10%;
`;
