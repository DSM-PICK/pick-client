import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: ${props =>
    `repeat(${props.length}, minmax(70px, 1fr))`};
  width: 100%;
  height: 100%;
`;

export const StateText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => (props.state === "무단" ? "#FF406E" : "#000000")};
  font-size: 16px;
`;
