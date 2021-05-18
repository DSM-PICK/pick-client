import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 1px;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 1200px;
  justify-content: space-between;
`;

export const changeStudentBtn = styled.button`
  transform: translateX(30px);
  background: none;
  display: flex;
  justify-content: space-between;
  box-sizing: content-box;
  padding: 7px 15px;
  width: 50px;
  border: 2px solid #fa9600;
  color: #fa9600;
  border-radius: 8px;
`;
