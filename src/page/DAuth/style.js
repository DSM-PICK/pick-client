import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthWrap = styled.div`
  width: 384px;
  border-radius: 16px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  margin-bottom: 7rem;
`;

export const AuthHeader = styled.div`
  text-align: center;
  padding: 5rem 0;

  p {
    margin-top: 0.7rem;
    font-size: 1.1rem;
  }
`;

export const AuthBody = styled.form`
  padding: 0 2rem;
  padding-bottom: 3rem;
`;

export const FormWrap = styled.div`
  /* height: 17rem; */
`;

export const AuthInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.7rem;
  box-sizing: border-box;
  font-size: 1.3rem;
  border: 1px solid #909090;
  border-radius: 12px;
  outline: none;
  transition: 300ms all;

  & + & {
    margin-top: 1rem;
  }

  &:focus {
    border: 1px solid rgba(38, 125, 255, 0.6);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const ButtonWrap = styled.div`
  margin-top: 2rem;
`;
export const AuthButton = styled.button`
  border-radius: 12px;
  width: 100%;
  cursor: pointer;
  border: 1px solid transparent;
  outline: none;
  padding: 0.8rem 0;
  color: white;
  font-size: 1.2rem;
  transition: 125ms all;

  & + & {
    margin-top: 0.5rem;
  }
`;
export const WhiteBtn = styled(AuthButton)`
  background: transparent;
  color: #707070;

  &:hover {
    color: #303030;
  }
`;
export const BlueBtn = styled(AuthButton)`
  background: linear-gradient(177.33deg, #3d8bfe 5.4%, #267dff 97.78%);

  &:hover {
    background: linear-gradient(177.33deg, #267dff 5.4%, #0969f8 97.78%);
  }
`;

export const HelpMessage = styled.p`
  color: #707070;
  margin-top: 0.4rem;
  cursor: pointer;
  transition: 125ms all;

  &:hover {
    color: #303030;
  }
`;

export const ErrWrap = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HideBtn = styled.button`
  display: none;
`;

const errSlide = keyframes`
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
`;

export const ErrorMsg = styled.p`
  text-align: center;
  color: #e81a95;
  animation: 125ms ${errSlide};
`;
