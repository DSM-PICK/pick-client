import styled from "styled-components";

export const Container = styled.label`
  margin: ${props => (props.margin ? props.margin : " 0 0 13px 0")};
  color: ${props => (props.color ? props.color : "#333336")};
  font-size: ${props => (props.fontSize ? props.fontSize : "18px")};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "bold")};
  text-align: ${props => (props.textAlign ? props.textAlign : "start")};
`;
