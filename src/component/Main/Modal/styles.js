import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  z-index: 3;
`;

export const Modal = styled.div`
  margin: ${props => (props.margin ? props.margin : "45%")};
  display: flex;
  width: 540px;
  height: 300px;
  background: white;
  border: 1px solid #707070;
  border-radius: 30px;
  flex-direction: column;
`;

export const ModalText = styled.div`
  display: flex;
  width: 540px;
  height: 200px;
  color: #20223e;
  font-size: 32px;
  font-weight: bold;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

export const ModalSubText = styled.p`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  color: #20223e;
  font-size: 26px;
  font-weight: 400;
  align-items: center;
  justify-content: center;
`;

export const FirstSpan = styled.span`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const SecondSpan = styled(FirstSpan)`
  width: auto;
  margin: 10px 0 0 0;
`;

export const ModalBtnWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;

export const ModalOkay = styled.div`
  display: flex;
  width: 100%;
  color: black;
  font-size: 30px;
  text-decoration: none;
  align-items: center;
  justify-content: center;
`;

export const ModalCancle = styled(ModalOkay)`
  color: #707070;

  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 30px;
    background: #707070;
    border: none;
    left: 50%;
    transform: translateX(-50%);
  }
`;
