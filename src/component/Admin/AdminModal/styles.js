import styled from "styled-components";

export const Container = styled.div`
  /* display: flex; */
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  display: flex;
  width: 465px;
  height: 400px;
  background: #202831;
  border-radius: 36px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  height: 40px;
  color: #ffffff;
  font-size: 31px;
  font-weight: bold;
  padding: 40px 0;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.div`
  display: flex;
  height: 100%;
  color: #ffffff;
  font-size: 27px;
  align-items: center;
  justify-content: center;
`;
export const Footer = styled.div`
  display: flex;
  margin-top: auto;
  padding: 20px 0;
  width: 100%;
  align-items: center;
  justify-content: center;

  &::after {
    position: absolute;
    left: 50%;
    content: " ";
    width: 1px;
    height: 32px;
    background: #ffffff;
  }
`;

export const FooterBtn = styled.button`
  display: flex;
  border: none;
  width: 100%;
  background: #202831;
  color: ${props => (props.text === "취소" ? "#ffffff" : "#C4C4C4")};
  font-size: 27px;
  outline: none;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;
