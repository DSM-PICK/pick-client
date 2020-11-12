import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => (props.margin ? props.margin : "0")};
  padding: ${props => (props.padding ? props.padding : "0")};
  color: ${props => (props.color ? props.color : "#ffffff")};
  font-size: ${props => (props.fontSize ? props.fontSize : "15px")};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "normal")};
  border: ${props => (props.border ? props.border : "none")};
  border-radius: ${props => (props.radiusSize ? props.radiusSize : "0")};
  background: ${props => (props.background ? props.background : "none")};

  outline: none;
  text-decoration: none;
  align-items: center;
  justify-content: center;
`;
