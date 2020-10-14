import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border: none;
  border-bottom: 1px solid #c4c4c4;
  padding-right: 5px;
  align-items: center;

  margin: 25px 0;
`;

export const ShowBtn = styled.button`
  display: flex;
  width: 25px;
  height: 18px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
