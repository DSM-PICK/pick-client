import styled from "styled-components";

export const Containter = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  margin-top: 20px;
  border-bottom: 1px solid #c4c4c4;
`;

export const SectionSpan = styled.span`
  display: flex;
  height: 100%;
  font-size: 16px;
  color: #707070;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const SectionCheckboxWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 44px;
`;

export const SectionCheckbox = styled.input`
  display: none;

  & + label {
    display: flex;
    position: relative;
    width: 16px;
    height: 16px;
    border: none;
    border-radius: 3px;
    cursor: pointer;

    &::after {
      content: " ";
      top: -4px;
      left: -4px;
      position: absolute;
      width: 22px;
      height: 22px;
      border: 1px solid #707070;
      border-radius: 4px;
    }
  }

  &:checked + label {
    background: #267dff;
  }
`;
export const SectionCheckboxLabel = styled.label``;

export const SectionSeq = styled(SectionSpan)`
  min-width: 44px;
`;

export const SectionStdNum = styled(SectionSpan)`
  min-width: 100px;
`;

export const SectionName = styled(SectionSpan)`
  min-width: 100px;
`;

export const SectionClassWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const SectionClass = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  font-size: 16px;
  color: #707070;
  align-items: center;
  justify-content: center;
`;
