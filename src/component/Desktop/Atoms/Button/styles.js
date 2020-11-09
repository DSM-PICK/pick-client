import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  flex: ${props => props.css.flex};
  margin: ${props => (props.css.margin ? props.css.margin : "0")};
  padding: ${props => (props.css.padding ? props.css.padding : "0")};
  color: ${props => props.css.color};
  font-size: ${props => (props.css.fontSize ? props.css.fontSize : "15px")};
  font-weight: ${props =>
    props.css.fontWeight ? props.css.fontWeight : "normal"};
  border: ${props => (props.css.border ? props.css.border : "none")};
  background: ${props =>
    props.css.background ? props.css.background : "none"};

  outline: none;
  text-decoration: none;
  align-items: center;
  justify-content: center;
`;
