import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template: 18px 1fr / 1fr;
  text-decoration: none;
  border-radius: 0 13px 0 13px;
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.25);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;
  font-size: 13px;
  font-weight: 600;

  background: ${props => (props.bg ? props.bg : "#473FD1")};

  border-radius: 0 13px 0 0;
`;

export const Wrap = styled.div`
  padding: 0px 10px;
  background: #ffffff;

  border-radius: 0 0 0 13px;
`;

export const AttendanceStatsText = styled.p`
  padding: 5px;
  color: ${props => (props.color ? props.color : "#000000")};
  font-size: 13px;
  font-weight: 400;
  text-decoration: none;
`;
