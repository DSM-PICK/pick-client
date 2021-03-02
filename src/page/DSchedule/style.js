import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color:#F2F2F2;
    }
`;
export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
export const Header = styled.div`
  display: flex;
`;

export const ControlerWrap = styled.div`
  display: flex;
`;
export const ShowDate = styled.div`
  display: flex;
  margin-left: 1rem;
  font-size: 1.3rem;
  font-weight: bolder;
  align-items: center;
`;
export const MoveMonth = styled.button`
  border: none;
  box-shadow: 0px 1px 1px rgba(144, 144, 144, 0.2);
  background-color: white;
  border-radius: 6px;
  padding: 0.5rem 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShowDay = styled.div`
  border-radius: 6px;
  width: 7rem;
  margin: 0 0.5rem;
  text-align: center;
  font-weight: bold;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-right: 7px solid #323232;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  transform: rotate(${props => props.x || 0}deg);
`;

export const Body = styled.div`
  overflow-x: hidden;
  border-radius: 15px;
  background-color: white;
  margin-top: 0.5rem;
`;

export const DScheduleHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.3rem 0;
  box-shadow: 0px 1px 1px rgba(144, 144, 144, 0.2);
`;

export const DScheduleItem = styled.div`
  flex: 1 1 20%;
  padding: 0 0.3rem;
  box-sizing: border-box;
  font-weight: bolder;
`;

export const DScheduleBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0px 1px 1px rgb(144 144 144 / 20%);
`;