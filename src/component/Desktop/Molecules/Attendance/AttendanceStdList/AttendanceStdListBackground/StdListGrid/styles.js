import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 4fr 1fr;
  width: 100%;
  height: 24px;
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

export const StdName = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 95px;
  color: #000000;
  font-size: 16px;
  font-weight: ${props => props.fontWeight || "400"};
`;

export const StdMemo = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  font-size: 16px;
  font-weight: ${props => props.fontWeight || "400"};
`;
