import styled from "styled-components";
import { Container } from "../styles";

export const UBContainer = styled(Container)`
  position: relative;
  width: auto;

  &:hover {
    cursor: pointer;
  }

  &::after {
    content: " ";
    position: absolute;
    right: 0px;
    border-top: 6px solid #ffffff;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
  }
`;
