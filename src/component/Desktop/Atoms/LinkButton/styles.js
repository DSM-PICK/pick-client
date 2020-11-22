import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;
  flex: ${props => props.css.flex};
  width: ${props => props.css.width};
  height: ${props => props.css.height};
  margin: ${props => (props.css.margin ? props.css.margin : "0")};
  padding: ${props => (props.css.padding ? props.css.padding : "0")};
  color: ${props => props.css.color};
  font-size: ${props => (props.css.fontSize ? props.css.fontSize : "15px")};
  font-weight: ${props =>
    props.css.fontWeight ? props.css.fontWeight : "normal"};
  border: ${props => (props.css.border ? props.css.border : "none")};
  border-radius: ${props => props.css.radiusSize};
  background: ${props =>
    props.css.background ? props.css.background : "none"};
  box-shadow: ${props => props.css.boxShadow};

  text-decoration: none;
  align-items: center;
  justify-content: center;
`;
