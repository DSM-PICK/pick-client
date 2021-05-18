import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

export const Select = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const SelectHeader = styled.p`
  color: #000000;
  font-size: 16px;
  font-weight: 300;
  margin: 0 0 11px 0;
`;

export const SelectBody = styled.div`
  display: grid;
  grid-template: repeat(auto-fill, 24px) / repeat(auto-fill, 100%);
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 96px;
  overflow: scroll;
`;

export const SelectItem = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 24px;
  height: 100%;
  color: ${props => (props.select ? "#406CFF" : "#909090")};
  font-size: 16px;
  font-weight: ${props => (props.select ? 700 : 400)};

  &:hover {
    cursor: pointer;
    color: #406cff;
  }
`;
