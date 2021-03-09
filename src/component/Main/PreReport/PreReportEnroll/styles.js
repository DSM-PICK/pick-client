import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 24px;
  grid-template: 180px 40px / 1fr;
  padding: 0 0 0 20px;
  width: 100%;
  height: 100%;
`;

export const StdListWrap = styled.div`
  display: grid;
  grid-template: repeat(auto-fill, 29px) / repeat(auto-fill, minmax(50%, 1fr));
  padding: 0 20px;
  border: 1px solid #707070;
  border-radius: 30px;
  background: white;
  overflow: scroll;
`;

export const SubmitBtn = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 30px;
  background: #3282fa;
  color: white;
  font-size: 18px;
  font-weight: 400;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;
