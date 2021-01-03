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
  outline: none;
  background: ${props => `url(${props.img})`} 100% / 100%;
`;
