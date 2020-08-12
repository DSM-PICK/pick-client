import styled from "styled-components";

export const Container = styled.div``;

export const BottomText = styled.div`
  background-color: #2764a7;
  color: white;
  padding: 10px;
  bottom: 70px;
  left: 50%;
  position: fixed;
  transform: translateX(-50%);
  border-radius: 24px;
`;

export const TopContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 10px;
  transform: translateX(-50%);
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.14);
  border-radius: 29px;
  background-color: white;
  padding: 10px;
`;

export const TopHeader = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;

export const TopBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
