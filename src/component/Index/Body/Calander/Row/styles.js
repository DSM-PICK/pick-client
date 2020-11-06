import styled, { css } from "styled-components";

export const Container = styled.div`
  flex: 1 1 18%;

  ${props =>
    props.isActive &&
    css`
      color: #267dff;
    `}

  &:nth-child(5) {
    > div {
      border-right: 0;
    }
  }
`;
