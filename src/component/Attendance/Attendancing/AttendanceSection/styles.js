import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: calc(100% - 50px);
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Article = styled.div`
  display: flex;
  width: 100%;
  margin: 31px 0 13px 0;
  flex-direction: column;
  justify-content: space-around;
`;

export const Name = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #20223e;
`;

export const Location = styled.div`
  text-align: center;
  font-size: ${props => (props.location === "자습실" ? "32px" : "20px")};
  font-weight: ${props => (props.location === "자습실" ? "bold" : "300")};
  padding-top: ${props => (props.location === "자습실" ? "0" : "10px")};
  color: #20223e;
`;

export const Head = styled.p`
  position: absolute;
  right: 50px;
  font-size: 20px;
  font-weight: 300;
`;

export const StdCount = styled(Head)`
  left: 50px;
`;

export const Attendance = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  overflow-y: auto;
  flex-direction: column;
`;
