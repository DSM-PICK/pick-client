import styled from "styled-components";

export const ModalText = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  color: #20223e;
  font-size: 32px;
  font-weight: bold;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

export const ModalBtnWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;

export const ModalOkay = styled.button`
  display: flex;
  width: 100%;
  color: black;
  font-size: 30px;
  font-weight: 400;
  text-decoration: none;
  border: none;
  background: none;
  outline: none;

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
