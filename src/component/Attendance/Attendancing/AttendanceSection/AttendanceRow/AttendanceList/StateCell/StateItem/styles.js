import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.current === props.value ? 0 : 1)};
  height: 24px;
  color: #000000;
  font-weight: 400;

  &:hover {
    font-weight: ${props => (props.isOpen ? "bold" : "400")};
  }

  transition: all 0.1s ease-in-out;
`;
