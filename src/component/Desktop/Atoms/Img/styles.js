import styled from "styled-components";

export const Container = styled.img`
  width: ${props => (props.width ? props.width : "auto")};
  height: ${props => (props.height ? props.height : "auto")};
`;
