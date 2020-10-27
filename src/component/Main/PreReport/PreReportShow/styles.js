import styled from "styled-components";

export const Container = styled.div`
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
  height: 14px;
  padding: 10px 0 6px 0;
  justify-content: space-evenly;
`;

export const ShowHeaderStd = styled.p`
  display: flex;
  width: 100px;
  color: #707070;
  font-size: 14px;
  justify-content: center;
`;

export const ShowHeaderKind = styled(ShowHeaderStd)`
  width: 40px;
`;

export const ShowHeaderDate = styled(ShowHeaderStd)`
  width: 260px;
`;

export const ShowBody = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: auto;
  border-radius: 0 0 60px 60px;
  flex-direction: column;
`;

export const ShowBodyBox = styled.div`
  display: flex;
  width: 100%;
  padding: 5px 0;
  align-items: center;
  justify-content: space-evenly;
`;

export const ShowBodyStd = styled(ShowHeaderStd)`
  font-size: 16px;
`;

export const ShowBodyKind = styled(ShowHeaderKind)`
  font-size: 16px;
`;

export const ShowBodyDate = styled(ShowHeaderDate)`
  font-size: 16px;
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
