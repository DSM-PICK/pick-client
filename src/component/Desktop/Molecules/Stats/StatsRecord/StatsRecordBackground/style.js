import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  width: calc(100% - 48px);
  height: calc(100% - 30px);
  padding: 15px 24px;
`;

export const GradeWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
`;

export const GradeTitle = styled.p`
  color: #000000;
  font-size: 16px;
  font-weight: bold;
`;
