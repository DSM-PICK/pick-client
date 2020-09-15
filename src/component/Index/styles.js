import styled from "styled-components";
import { IndexBackground } from "../../asset";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 30px 70px;
  background: url(${IndexBackground}) no-repeat;
  background-size: cover;
  * {
    font-family: "SangSangShinb7" !important;
  }
`;
