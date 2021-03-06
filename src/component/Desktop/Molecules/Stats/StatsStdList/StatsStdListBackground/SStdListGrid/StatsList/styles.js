import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: ${props =>
    `repeat(${props.length}, minmax(70px, 1fr))`};
  width: 100%;
  height: 100%;
`;

export const StateText = styled.p``;
