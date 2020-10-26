import styled from "styled-components";

export const Container = styled.div`
  border-radius: 60px 60px 0 0;
  /* flex: 1; */
  height: 100%;
  background-color: #fafafa;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderBackBtn = styled.div`
  display: flex;
  width: 3em;
  height: 3em;
  margin-right: 20px;
  align-items: center;
  justify-content: center;
  background: ${props => `url(${props.imglink}) no-repeat center/100%`};
`;

export const HeaderFloor = styled.div`
  display: flex;
  height: 48px;
  font-size: 38px;
  font-weight: bolder;
  align-items: center;
`;
