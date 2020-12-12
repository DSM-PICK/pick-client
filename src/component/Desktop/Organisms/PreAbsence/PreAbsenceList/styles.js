import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 30px 1fr;
  position: relative;
  flex-direction: column;
`;

export const MiddleSetting = styled.div`
  position: absolute;
  bottom: 30px;
  left: 0;
  margin-left: 50%;
  transform: translateX(-50%);
`;
