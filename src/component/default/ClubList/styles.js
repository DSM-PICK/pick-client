import styled, { css } from "styled-components";
import {
  Container as ClubItemContainer,
  Where as ClubItemWhere
} from "../ClubItem/style";

export const Container = styled.div`
  background-color: white;
  padding: 30px;
  max-height: 630px;
  overflow-y: auto;

  & ${ClubItemContainer} {
    ${props =>
      !props.active &&
      css`
        background: white;
        color: black;

        ${ClubItemWhere} {
          color: #707070;
        }
      `}
  }
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
