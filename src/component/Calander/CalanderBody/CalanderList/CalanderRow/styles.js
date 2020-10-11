import styled from "styled-components";
import * as Item from "./CalanderItem/styles";

export const Container = styled.div`
  display: flex;

  &:first-child > ${Item.Container} {
    border-top: none;
  }

  &:last-child > ${Item.Container} {
    border-bottom: none;
  }

  & ${Item.Container}:first-child {
    border-left: none;
  }

  & ${Item.Container}:last-child {
    border-right: none;
  }
`;
