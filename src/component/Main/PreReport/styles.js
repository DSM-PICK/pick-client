import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  width: calc(100% - 40px);
  height: 260px;
  margin: 10px 0 30px 0;
  padding: 20px !important;
  border-radius: 40px;
  box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.16);
  background: #fafafa;
`;

export const Func = styled.div`
  display: grid;
  gap: 30px;
  grid-template: 40px 30px 40px / 1fr;
  width: 40%;
  height: 260px;

  @media only screen and (max-width: 1100px) {
    width: 390px;
  }
`;

export const FuncKindState = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
`;

export const FuncKindName = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
`;

export const PreReportStates = styled.div`
  display: flex;
  width: calc(100% - 80px);
  height: 40px;
  color: white;
  border-radius: 15px;

  & > div:first-child {
    border-left: 1px solid #d0d0d0;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  & > div:last-child {
    border-right: 1px solid #d0d0d0;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
`;

export const FuncTitle = styled.div`
  display: flex;
  width: max-content;
  height: 26px;
  font-size: 22px;
  color: black;
  margin-right: 20px;
`;

export const FuncDate = styled(FuncKindName)`
  display: flex;
  height: 30px;
`;

export const FuncAdd = styled.button`
  display: flex;
  width: 70px;
  height: 27px;
  color: white;
  font-size: 18px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: #267dff;
  border: none;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const FuncNameWrap = styled.div`
  display: flex;
`;

export const Show = styled.div`
  display: flex;
  width: 58%;
  height: 260px;
  border: 1px solid #707070;
  border-radius: 60px;
  background: white;
  flex-direction: column;
`;

export const ShowHeader = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  padding: 10px 0;
  justify-content: space-evenly;
`;

export const ShowHeaderStd = styled.p`
  display: flex;
  width: 130px;
  color: #707070;
  font-size: 20px;
  justify-content: center;
`;

export const ShowHeaderKind = styled(ShowHeaderStd)`
  width: 70px;
`;

export const ShowHeaderDate = styled(ShowHeaderStd)`
  width: 200px;
`;

export const ShowBody = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  overflow: auto;
  border-radius: 0 0 60px 60px;
  flex-direction: column;
`;

export const ShowBodyBox = styled.div`
  display: flex;
  width: 100%;
  padding: 6px 0;
  border-bottom: 1px solid #808080;
  align-items: center;
  justify-content: space-evenly;
`;

export const ShowBodyStd = styled(ShowHeaderStd)`
  color: ${props =>
    props.curPreAbsenceData == props.id ? "#1A6EEB" : "#20223e"};
  font-size: 22px;
`;

export const ShowBodyKind = styled(ShowHeaderKind)`
  color: ${props =>
    props.curPreAbsenceData == props.id ? "#1A6EEB" : "#20223e"};
  font-size: 22px;
`;

export const ShowBodyDate = styled(ShowHeaderDate)`
  color: ${props =>
    props.curPreAbsenceData == props.id ? "#1A6EEB" : "#20223e"};
  font-size: 22px;
  flex-direction: column;
  margin-left: 15px;
`;
