import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;
  width: ${props => (props.css.width ? props.css.width : "auto")};
  height: ${props => (props.css.height ? props.css.height : "auto")};
  margin: ${props => (props.css.margin ? props.css.margin : "0")};
  padding: ${props => (props.css.padding ? props.css.padding : "0")};
  color: ${props => (props.css.color ? props.css.color : "#ffffff")};
  font-size: ${props => (props.css.fontSize ? props.css.fontSize : "15px")};
  font-weight: ${props =>
    props.css.fontWeight ? props.css.fontWeight : "bold"};
  border: ${props => (props.css.border ? props.css.border : "none")};
  background: ${props =>
    props.css.background ? props.css.background : "none"};

  text-decoration: none;
  align-items: center;
  justify-content: center;
`;
