import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
`;

export const Modal = styled.div`
  width: 40%;
  height: 75%;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: #707070;
  > div > div + div {
    margin-top: 10px;
  }
`;

export const HeaderCenter = styled.div`
  text-align: center;
  & > div:nth-child(1) {
    font-size: 25px;
    font-weight: lighter;
    color: black;
  }
`;

export const EmptyBox = styled.div`
  width: 70px;
`;

export const Hr = styled.div`
  border-top: 1px solid #707070;
`;

export const Body = styled.div`
  padding: 20px;
  flex: 1;
  box-sizing: border-box;
`;
