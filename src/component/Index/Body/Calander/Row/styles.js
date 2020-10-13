import styled from "styled-components";

export const Container = styled.div`
  flex: 1 1 18%;

  &:nth-child(5) {
    > div {
      border-right: 0;
    }
  }
`;
