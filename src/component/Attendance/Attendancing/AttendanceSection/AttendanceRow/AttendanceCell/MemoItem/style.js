import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  height: 100%;
`;

export const FloorWrap = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
`;

export const FloorItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  font-size: 18px;

  :hover {
    font-weight: bold;
  }
`;

export const ClassWrap = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export const ClassItem = styled(FloorItem)`
  height: 30px;
`;
