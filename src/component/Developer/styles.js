import styled from "styled-components";

export const Container = styled.div`
  background-color: #fafafa;
  width: 100%;
  padding: 50px 80px;
  color: black;
  box-sizing: border-box;
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;

  > div > div {
    font-size: 15px;
    margin-top: 15px;
  }
`;

export const Field = styled.div`
  font-weight: bold;
  font-size: 15px;
`;

export const Hr = styled.div`
  border-top: 2px solid #c4c4c4;
  width: 100%;
  height: 0;
  margin: 40px 0;
`;

export const Footer = styled.div`
  display: flex;

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 13px;
    white-space: nowrap;
    color: #707070;

    > img {
      width: 130px;
      margin-right: 10px;
    }
  }

  > div:nth-child(2) {
    justify-content: flex-end;

    a {
      margin-left: 10px;
    }
  }
`;
