import styled, { css } from "styled-components";

export const Container = styled.div`
  box-shadow: 0px 1px 1px rgba(144, 144, 144, 0.2);
  padding: 1rem 0.5rem;
  margin-top: 15px;
  text-align: center;

  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 1px 1px rgba(144, 144, 144, 0.2);
  width: 180px;
`;
export const BasicButton = styled.button`
  width: 90%;
  margin-top: 15px;
  border-radius: 8px;
  padding: 4px 0;
  font-size: 1.03rem;
  transition: all 250 ms;
  background-color: transparent;
`;

export const ScheduleChangeBtn = styled(BasicButton)`
  border: 1px solid #406cff;
  color: #406cff;

  ${props =>
    props.isCancelMode
      ? css`
          border: 1px solid #ff406e;
          background-color: #ff406e;
          color: white;
        `
      : css`
          &:hover {
            color: white;
            background-color: #406cff;
          }
        `}
`;
