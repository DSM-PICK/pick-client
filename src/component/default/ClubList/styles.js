import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  background-color: white;
  padding: 30px;
`;

export const ClubRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e2e0e0;

  &:last-child {
    border: none;
  }
`;
