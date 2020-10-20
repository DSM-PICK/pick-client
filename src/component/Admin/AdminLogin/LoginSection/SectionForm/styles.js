import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;

  div > input {
    display: flex;
    border: none;
    border-bottom: 1px solid #c4c4c4;
    padding-right: 5px;
    align-items: center;
    margin: 25px 0;
  }
`;

export const PasswordWrap = styled.div`
  position: relative;

  > img {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
  align-items: flex-start;
  flex-direction: column;
`;
