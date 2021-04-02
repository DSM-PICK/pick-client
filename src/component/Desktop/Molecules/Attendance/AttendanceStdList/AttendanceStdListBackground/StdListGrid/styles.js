import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 8fr 2fr;
  width: 100%;
  height: 30px;
  background: ${props => (props.select ? "#F4F4F4" : "#ffffff")};
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
    width: 14px;
    height: 14px;
    border: none;
    border-radius: 3px;
    cursor: pointer;

    &::after {
      content: " ";
      top: -3px;
      left: -3px;
      position: absolute;
      width: 18px;
      height: 18px;
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
