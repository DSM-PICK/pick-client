import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  height: 100px;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftTextWrap = styled.div`
  color: #20223e;
  font-size: 38px;
  margin-left: 5px;
  font-weight: bolder;
`;

export const MiddleWrap = styled.div`
  text-align: center;
`;

export const Box = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.width};
`;

export const MiddleFirstText = styled.div`
  font-weight: bold;
  font-size: 30px;
`;

export const MiddleSecondText = styled.div`
  font-weight: normal;
  font-size: 18px;
`;
