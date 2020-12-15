import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  background: ${props => `url('${props.url}') no-repeat center/50%`};
`;
