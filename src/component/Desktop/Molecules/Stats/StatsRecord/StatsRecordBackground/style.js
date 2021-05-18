import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 10px;
  grid-template-rows: 1fr 1fr 1fr;
  width: 100%;
  height: 100%;
`;

export const GradeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const GradeTitle = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 40px;
  color: #000000;
  font-size: 16px;
  font-weight: bold;
`;

export const RecordLine = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${props => (props.isGray ? "#F8F8F8" : "#ffffff")};
`;

export const RecordText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  min-height: 27px;
  color: ${props => (props.isHighlight ? "#FF406E" : "#000000")};
  font-size: 16px;
`;
