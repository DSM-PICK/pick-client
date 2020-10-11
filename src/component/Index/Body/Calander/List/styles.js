import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > div:nth-child(5n) {
    border-right: none;
  }
`;
