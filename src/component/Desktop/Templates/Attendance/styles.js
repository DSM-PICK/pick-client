import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #e5e5e5;
`;

export const MainWrap = styled.div`
  display: grid;
  grid-gap: 0 120px;
  grid-template: repeat(4, 1fr) / 3fr 2fr;
  height: calc(100% - 40px);
  padding: 40px 10%;
`;
