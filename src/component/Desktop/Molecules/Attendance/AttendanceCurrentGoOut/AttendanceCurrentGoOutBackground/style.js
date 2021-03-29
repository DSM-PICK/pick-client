import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  width: 100%;
  height: 100%;
  padding: 12px 15px;
  box-sizing: border-box;
`;

export const FloorWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const FloorTitle = styled.p`
  color: #000000;
  font-size: 16px;
  font-weight: 500;
  padding: 12px 0;
`;

export const FloorDataWrap = styled.div`
  display: grid;
  grid-template: ${props => `repeat(${props.count}, 30px) / 1fr 1fr 1fr`};
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export const FloorDataText = styled.p`
  color: #000000;
  font-size: 16px;
  font-weight: 400;
`;