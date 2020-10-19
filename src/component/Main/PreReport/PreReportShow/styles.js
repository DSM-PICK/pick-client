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
  height: 100%;
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
  font-size: 22px;
`;

export const ShowBodyKind = styled(ShowHeaderKind)`
  font-size: 22px;
`;

export const ShowBodyDate = styled(ShowHeaderDate)`
  font-size: 22px;
  flex-direction: column;
  margin-left: 15px;
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

export const ShowCheckDelBtn = styled.button`
  position: absolute;
  display: flex;
  width: 90px;
  height: 32px;
  margin: 0 0 0 25%;
  color: #ffffff;
  font-size: 22px;
  background: #e81a95;
  border-radius: 8px;
  transform: translateX(-50%) translateY(-120%);
  justify-content: center;
`;
