import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(NavLink)`
  width: ${props => props.width || "auto"};
  height: ${props => props.height || "auto"};
  color: ${props => props.color || "#000000"};
  font-size: ${props => props.fontSize || "16px"};
  font-weight: ${props => props.fontWeight || "400"};
  text-decoration: none;

  &:hover {
    color: ${props => props.color_hover || "#505050"};
  }
`;
