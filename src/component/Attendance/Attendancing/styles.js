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
  background: ${props => `url('${props.url}') no-repeat center/100%`};
`;

export const HeaderFloor = styled.div`
  display: flex;
  height: 48px;
  font-size: 38px;
  font-weight: bolder;
  align-items: center;
`;

export const HeaderWhen = styled.div`
  position: absolute;
  display: flex;
  margin: 0 0 0 50%;
  height: 80px;
  flex-direction: column;
  transform: translateX(-50%);
  justify-content: space-evenly;
`;

export const HeaderMonthAndDay = styled.p`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;

export const HeaderDayOfTheWeek = styled.p`
  text-align: center;
  font-size: 18px;
`;

export const HeaderWho = styled.div`
  display: flex;
  font-size: 30px;
  font-weight: bold;
  align-items: center;
  flex-direction: column;
`;
