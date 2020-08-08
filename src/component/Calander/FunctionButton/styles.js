import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > button {
    z-index: 2;
  }
`;

export const Button = styled.button`
  width: 0;
  height: 0;
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  background-color: #2764a7;
  border-radius: 50%;
  color: white;
  border: none;
  margin: 10px 0;
`;

export const AnimationWrap = styled.div`
  display: flex;
  flex-direction: column;

  & > button:nth-child(1) {
    transform: translate(0px, 130px);
  }
  & > button:nth-child(2) {
    transform: translate(0px, 100px);
  }

  & > button {
    transition: 0.35s;
    ${(props) =>
      props.isOpen &&
      css`
        width: 80px;
        height: 80px;
        transform: translateY(0) !important;
      `}
  }
`;
