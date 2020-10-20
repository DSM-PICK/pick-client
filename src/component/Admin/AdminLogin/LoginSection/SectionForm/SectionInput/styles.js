import styled from "styled-components";

export const Container = styled.input`
  display: flex;
  padding: 5px 0 5px 0px;
  width: calc(25vw - 30px);
  min-width: 300px;
  border: none;
  color: #000000;
  font-size: 20px;
  outline: none;

  &::placeholder {
    color: #c4c4c4;
    padding-left: 10px;
  }
`;
