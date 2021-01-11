import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 24px;
`;

export const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  width: 100%;
  height: 24px;
`;

export const HeaderItem = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  font-size: 16px;
  font-weight: 600;
`;

export const HeaderList = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: ${props =>
    `repeat(${props.length}, minmax(70px, 1fr))`};
  width: 100%;
  height: 100%;
`;
