import styled from "styled-components";

export const Container = styled.div`
  flex: 1 1 18%;
  border-top: 1px solid white;
  border-right: 1px solid white;
  text-align: center;
  padding: 5px;
  box-sizing: border-box;
  font-size: 25px;

  &:nth-child(5n) {
    border-right: 0s;
  }
`;
