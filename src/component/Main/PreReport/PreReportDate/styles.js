import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  left: 65px;
  width: 219px;
  height: 60px;
  background: #fafafa;
  flex-direction: column;
  justify-content: space-between;
`;

export const Date = styled.div`
  display: flex;
  width: 219px;
  height: 26px;
  font-size: 18px;
`;

export const Month = styled.div`
  display: flex;
  &::before {
    content: "${props => (props.month ? props.month : "__")}";
    width: 26px;
    height: 26px;
    font-size: 18px;
    text-align: right;
  }
`;

export const Day = styled.div`
  display: flex;
  &::before {
    content: "${props => (props.day ? props.day : "__")}";
    width: 26px;
    height: 26px;
    font-size: 18px;
    text-align: right;
  }
`;

export const ClassText = styled.div`
  display: flex;
`;

export const Class = styled.input`
  height: 26px;
  margin: -3px 0 0 0;
  padding: 0;
  border: none;
  background: #fafafa;
  color: #20223e;
  font-size: 18px;
  text-align: right;
  outline: none;
  float: left;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ::placeholder {
    color: #20223e;
  }
`;

export const Additional = styled.div`
  display: flex;
  margin-left: 10px;
`;
