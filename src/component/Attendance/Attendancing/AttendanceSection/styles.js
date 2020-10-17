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
  margin: 61px 0 13px 0;
  flex-direction: column;
  justify-content: space-around;
`;

export const Name = styled.div`
  text-align: center;
  font-size: 34px;
  font-weight: bold;
  color: #20223e;
`;

export const Location = styled.div`
  text-align: center;
  font-size: ${props => (props.location === "자습실" ? "32px" : "28px")};
  font-weight: ${props => (props.location === "자습실" ? "bold" : "300")};
  color: #20223e;
`;

export const Head = styled.div`
  position: absolute;
  right: 50px;
  font-size: 28px;
`;

export const Attendance = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  flex-direction: column;
`;
