import styled from "styled-components";

export const SetDateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 52px 0;
  width: 100%;
  border: none;
  background: none;
  outline: none;
`;

export const BigLinkButtonWrap = styled.div`
  margin: 10px;
`;

export const BigLinkButtonDate = styled.p`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 6px;
`;

export const BigLinkButtonText = styled.p`
  color: #707070;
  font-size: 18px;
  font-weight: 400;
`;

export const StatsMainBodyCalendarWrap = styled.div`
  --heightA: -929px;
  position: absolute;
  bottom: var(--heightA);
  width: 100%;
`;
