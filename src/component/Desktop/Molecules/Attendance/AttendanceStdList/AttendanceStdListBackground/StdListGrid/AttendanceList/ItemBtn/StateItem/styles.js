import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.current === props.value ? 0 : 1)};

  &:hover {
    font-weight: bold;
  }

  transition: all 0.1s ease-in-out;
`;
