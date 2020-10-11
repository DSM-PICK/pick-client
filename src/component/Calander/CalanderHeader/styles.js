import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const DayHeader = styled.div`
  flex: 1;
  padding: 17px 10px;
  & > div {
    width: 20px;
    height: 20px;

    text-align: center;
  }
`;
