import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  height: 100%;
`;

export const FloorWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  border-right: 1px solid #c4c4c4;
`;

export const FloorItem = styled.div`
  color: #000000;
  font-size: 16px;
  font-weight: ${props => (props.isSelect ? "bold" : 500)};

  :hover {
    font-weight: bold;
  }
`;

export const ClassWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export const ClassItem = styled(FloorItem)`
  display: flex;
  padding: 5px 10px;
  box-sizing: border-box;
`;
