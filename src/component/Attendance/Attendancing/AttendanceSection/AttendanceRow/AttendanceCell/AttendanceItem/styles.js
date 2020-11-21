import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  color: ${props => (props.text === props.state ? "#2764A7" : "#ffffff")};
`;
