import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 0 20px;
  width: 100%;
  height: 260px;
  border-radius: 30px;
  flex-direction: column;
`;

export const ShowHeader = styled.div`
  display: grid;
  grid-template: 1fr / 100px 60px 300px 60px 1fr;
  gap: 12px;
  width: 100%;
  height: 14px;
  padding: 10px 0 6px 0;
  justify-content: space-evenly;
`;

export const ShowHeaderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #707070;
  font-size: 14px;
  font-weight: 400;
`;

export const ShowBody = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: auto;
  border-radius: 0 0 30px 30px;
  flex-direction: column;
`;

export const ShowBodyBox = styled.div`
  display: grid;
  grid-template: 1fr / 100px 60px 300px 60px 1fr;
  gap: 12px;
  width: 100%;
  padding: 5px 0;
`;

export const ShowBodyBoxItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #303030;
  font-size: 16px;
  font-weight: 400;
`;

export const ShowBodyNoneItemText = styled.p`
  display: flex;
  width: 100%;
  height: 100%;
  color: #20223e;
  font-size: 28px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
`;

export const ShowBodyTextItem = styled.span`
  margin-right: 5px;
`;
