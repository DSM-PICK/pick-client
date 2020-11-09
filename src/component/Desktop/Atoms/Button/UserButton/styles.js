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
    right: -3px;
    border-top: 8px solid #ffffff;
    border-right: 6px solid transparent;
    border-left: 6px solid transparent;
  }
`;
