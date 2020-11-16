import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;
  font-size: 24px;
  font-weight: 400;
  text-decoration: none;
  border-radius: ${props => props.radiussize};
  background: ${props =>
    props.img ? `url(${props.img}) 100% /100% no-repeat` : "#fafafa"};
`;