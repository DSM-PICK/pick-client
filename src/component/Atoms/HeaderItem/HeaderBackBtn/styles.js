import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  width: 0px;
  height: 0px;
  background: ${props => `url('${props.url}') no-repeat center/40px 40px`};
`;
