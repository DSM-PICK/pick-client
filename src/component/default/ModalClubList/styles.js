import styled from "styled-components";

export const Container = styled.div``;
export const Row = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
`;
export const MemberWrap = styled.div`
  position: absolute;
  top: 100%;
  text-align: center;
  width: 100%;
  max-height: 100px;
  z-index: 10;
  padding: 10px;
  overflow-y: auto;
`;

export const CraeteInput = styled.input`
  width: 110px;
  border: none;
  outline: none;
  font-size: 15px;
  text-align: center;
  color: black;
`;

export const MemberItem = styled.div`
  padding: 10px;
  box-sizing: border-box;
`;
