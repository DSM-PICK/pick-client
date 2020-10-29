import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeaderWhere = styled.div`
  display: flex;
  margin-left: 20px;
  height: 60px;
  align-items: center;
  justify-content: center;
`;

export const HeaderBackBtn = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  background: ${props => `url('${props.url}') no-repeat center/50%`};
`;

export const HeaderFloor = styled.div`
  display: flex;
  height: 48px;
  font-size: 28px;
  font-weight: bolder;
  align-items: center;
`;

export const HeaderWhen = styled.div`
  position: absolute;
  display: flex;
  margin: 0 0 0 50%;
  height: 60px;
  flex-direction: column;
  transform: translateX(-80%);
  justify-content: center;
`;

export const HeaderMonthAndDay = styled.p`
  padding-bottom: 3px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

export const HeaderDayOfTheWeek = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 200;
`;

export const HeaderWho = styled.div`
  display: flex;
  padding-right: 10px;
  font-size: 24px;
  font-weight: bold;
  align-items: center;
  flex-direction: column;
`;
