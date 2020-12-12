import styled from "styled-components";

export const Where = styled.div`
  color: #707070;
  font-size: 12px;
  margin-top: 10px;
  font-weight: bold;
`;

export const Container = styled.div`
  width: 300px;
  height: 120px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 5px 7px 1px rgb(0, 0, 0, 0.1);
  margin: 25px;
  transition: 0.2s all;
  &:hover {
    transform: scale(1.15);
  }

  &.active {
    background-color: #e81a95;
    color: white;

    ${Where} {
      color: white;
    }
  }
`;

export const CircleName = styled.div`
  font-size: 23px;
  font-weight: bold;
`;
