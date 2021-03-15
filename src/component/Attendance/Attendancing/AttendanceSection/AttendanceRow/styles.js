import styled from "styled-components";

export const Containter = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #c4c4c4;
`;

export const SectionSpan = styled.span`
  display: flex;
  height: 100%;
  font-size: 16px;
  color: #20223e;
  align-items: center;
  justify-content: center;
`;

export const SectionCheckbox = styled.input`
  display: none;

  & + label {
    display: flex;
    width: 26px;
    height: 26px;
    border: 1px solid #707070;
    cursor: pointer;
  }

  &:checked + label {
    background: #267dff;
  }
`;
export const SectionCheckboxLabel = styled.label``;

export const SectionSeq = styled(SectionSpan)`
  font-size: 16px;
  color: #707070;
  min-width: 44px;
`;

export const SectionStdNum = styled(SectionSpan)`
  font-size: 20px;
  min-width: 100px;
`;

export const SectionName = styled(SectionSpan)`
  font-size: 20px;
  min-width: 100px;
`;

export const SectionClassWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
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

export const SectionSelectClass = styled.select`
  display: flex;
  width: 80%;
  height: 50%;
  font-size: 14px;
  color: #707070;
  border: 1px solid #707070;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const SectionOptionClass = styled.option`
  display: flex;
`;
