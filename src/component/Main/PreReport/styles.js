import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: calc(100% - 40px);
  height: 260px;
  margin: 10px 0;
  border-radius: 60px;
  box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.16);
  background: #fafafa;
  padding: 20px !important;
`;

export const Func = styled.div`
  display: flex;
  width: 40%;
  height: 260px;
  margin-left: 20px;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const FuncKindName = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: space-around;
`;

export const PreReportStates = styled.div`
  position: absolute;
  display: flex;
  left: 80px;
  width: calc(100% - 80px);
  height: 40px;
  color: white;
  border-radius: 15px;

  & > div:first-child {
    border-left: 1px solid #707070;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  & > div:last-child {
    border-right: 1px solid #707070;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
`;

export const FuncTitle = styled.div`
  position: absolute;
  display: flex;
  width: 52px;
  height: 26px;
  font-size: 26px;
  color: black;
  left: 0;
`;

export const FuncDate = styled(FuncKindName)`
  display: flex;
  height: 80px;
`;

export const FuncAdd = styled.button`
  display: flex;
  width: 100%;
  height: 40px;
  color: white;
  font-size: 24px;
  text-align: center;
  justify-content: center;
  background: #267dff;
  border: none;
  border-radius: 10px;
`;

export const Show = styled.div`
  display: flexbox;
  width: 55%;
  height: 260px;
  border: 1px solid #707070;
  border-radius: 60px;
  background: white;
`;
