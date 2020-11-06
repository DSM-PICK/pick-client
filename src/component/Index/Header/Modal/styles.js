import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 470px;
  height: 390px;
  margin-bottom: 200px;
  box-sizing: border-box;
  border-radius: 70px;
  background: #f5f5f5;
  border: 1px solid #707070;
  padding: 20px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Header = styled.div`
  margin-top: 30px;
`;

export const Title = styled.div`
  font-size: 30px;
  color: #20223e;
  font-weight: bold;
`;

export const Hr = styled.div`
  margin-top: 10px;
  width: 50px;
  height: 3px;
  border-radius: 10px;
  background: #267dff;
`;

export const Body = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  background: none;
  border: none;
  font-size: 20px;
  outline: none;
  flex: 1;
  &::placeholder {
    color: #c4c4c4;
  }
`;

export const InputWrap = styled.div`
  width: 300px;
  border-bottom: 1px solid #707070;
  padding: 5px;
  display: flex;
  & + & {
    margin-top: 20px;
  }
`;

export const LoginBtn = styled.button`
  width: 250px;
  margin-top: 50px;
  padding: 15px 0;
  border-radius: 24px;
  border: none;
  font-size: 20px;
  color: white;
  background: #267dff;
`;
