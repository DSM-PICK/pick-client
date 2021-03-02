import styled from "styled-components";

export const Container = styled.div`
  padding: 0.5rem 0.3rem;
  flex: 1 1 18%;

  border-right: 1px solid rgba(144, 144, 144, 0.3);
  border-bottom: 1px solid rgba(144, 144, 144, 0.3);

  &:nth-child(5n) {
    border-right: none;
  }

  &:nth-child(n + 26) {
    border-bottom: none;
  }
`;

export const Date = styled.div`
  font-weight: bolder;
  font-size: 1rem;
`;

export const Schedule = styled.div`
  font-size: 0.8rem;
`;

export const ShowSchedule = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TeacehrWrap = styled.div`
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TeacerName = styled.div`
  & + & {
    margin-top: 0.5rem;
  }
`;
