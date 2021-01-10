import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  width: 100%;
  height: 24px;
`;

export const StdName = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  font-size: 16px;
  font-weight: ${props => props.fontWeight || "400"};
`;

export const AttendanceList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StdMemo = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  font-size: 16px;
  font-weight: ${props => props.fontWeight || "400"};
`;
