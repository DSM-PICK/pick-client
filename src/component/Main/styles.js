import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
`;

export const MainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const MainHeaderLogo = styled.div`
  width: 500px;
  height: 40px;
  background: ${props =>
      props.url.length > 1 ? `url(${props.url})` : "#ffffff"}
    no-repeat;
  background-size: 500px 40px;
`;

export const MainBodyTopText = styled.div`
  display: flex;
  height: 120px;
  margin: 32px 0;
  color: #20223e;
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const MainBodyTopWho = styled.div`
  display: flex;
  align-items: center;
`;
export const MainBodyTopWhen = styled.div``;
export const MainBodyTopWhoName = styled.span``;
export const MainBodyTopWhenTime = styled.span`
  color: #2764a7;
`;

export const MainBodyOffwork = styled.div`
  height: 30px;
  margin: 32px 0 60px 0;
  font-size: 28px;
  text-align: center;
`;

export const MainBodyOffworkWhen = styled.span`
  color: #2764a7;
  font-size: 32px;
  font-weight: bold;
`;

export const MainBodyBox = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  color: #20223e;

  & > div {
    display: flex;
    border: none;
    padding: 0 0 20px 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  & > div > a {
    width: 49%;
  }
`;

export const MainBodyBoxText = styled.span`
  /* height: 34px; */
  /* margin-left: 30px; */
  display: flex;
  font-size: 24px;
  font-weight: bold;
`;

export const MainBodyBoxBefore = styled.div`
  display: flex;
  width: 100%;
  height: 260px;
  margin: 10px 0;
  border-radius: 60px;
  box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.16);
  background: #fafafa;
  padding: 20px !important;
`;

export const MainBodyBoxBeforeFunc = styled.div`
  display: flex;
  height: 260px;
  width: 421px;
  border: 1px solid black;
  margin-left: 20px;
`;

export const MainBodyLogoutButton = styled.button`
  position: absolute;
  left: 25px;
  width: 100px;
  height: 25px;
  background: none;
  font-size: 20px;
  font-weight: bold;
  color: #ff406e;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;
