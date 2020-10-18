import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

export const Modal = styled.div`
  /* position: relative; */
  display: flex;
  width: 640px;
  height: 300px;
  background: white;
  border: 1px solid #707070;
  border-radius: 60px;
  flex-direction: column;
  /* z-index: 4; */
`;

export const ModalSubText = styled.p`
  display: flex;
  width: 100%;
  font-size: 22px;
  font-weight: bold;
  color: #20223e;
`;

export const ModalText = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
  font-size: 38px;
  font-weight: bold;
  color: #20223e;
  box-sizing: border-box;
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
