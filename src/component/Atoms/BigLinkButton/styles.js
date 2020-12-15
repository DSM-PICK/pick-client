import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  position: relative;
  display: flex;
  width: 100%;
  height: 150px;
  background: ${props => (props.url ? `url(${props.url})` : "#fafafa")}
    no-repeat center/100%;
  font-size: 28px;
  color: ${props => (props.url ? "white" : "black")};
  text-decoration: none;
  border-radius: 40px;
  box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.16);
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
