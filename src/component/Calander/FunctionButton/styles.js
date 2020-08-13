import styled, { css } from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  outline: none;
  background-color: #2764a7;
  border-radius: 50%;
  border: none;
  margin: 10px 0;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BigButton = styled(Button)`
  z-index: 0;
  ${(props) =>
    props.isOpen &&
    css`
      transform: rotate(45deg);
    `};
  width: 80px;
  height: 80px;
`;

export const MenuButton = styled(Button)`
  width: 0;
  height: 0;
  &:nth-child(1) {
    transform: translate(0px, 130px);
  }
  &:nth-child(2) {
    transform: translate(0px, 100px);
  }
`;

export const MenuText = styled.div`
  width: 130px;
  text-align: right;
  margin-right: 15px;
  font-size: 19px;
  color: #2764a7;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
`;

export const AnimationWrap = styled.div`
  display: flex;
  flex-direction: column;

  ${ButtonWrap} {
    opacity: 0;
    ${(props) =>
      props.isOpen &&
      css`
        opacity: 1;
      `}
  }

  ${MenuButton} {
    ${(props) =>
      props.isOpen &&
      css`
        width: 60px;
        height: 60px;
        transform: translate(0) !important;
      `}
  }
`;
