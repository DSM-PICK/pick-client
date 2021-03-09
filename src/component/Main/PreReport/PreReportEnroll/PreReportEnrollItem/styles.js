import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  min-height: 29px;
  color: black;
  font-size: 18px;
  font-weight: 400;
`;

export const DelBtn = styled.button`
  width: 14px;
  height: 14px;
  border: none;
  padding: 2px;
  outline: none;
  background: ${props => `url(${props.img})`} 40% 50% / 80% 80% no-repeat;

  &:hover {
    cursor: pointer;
  }
`;
