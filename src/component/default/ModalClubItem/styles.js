import styled from "styled-components";

export const Container = styled.div`
  padding: 15px 15px;
  font-size: 20px;
  border-radius: 16px;
  border: 1px solid rgb(112, 112, 112, 0.5);
  margin: 5px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 130px;

  &.selected {
    background: #267dff;
    border: 0.4px solid #707070;
    color: white;
  }
`;
