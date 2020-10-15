import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  width: calc(100% - 40px);
  height: 260px;
  margin: 10px 0;
  border-radius: 60px;
  box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.16);
  background: #fafafa;
  padding: 20px !important;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    width: 1px;
    height: 100%;
    background: #707070;
  }
`;

export const Section = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  color: #000000;
  font-size: 24px;
  align-items: center;
`;

export const InformationWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 20px 0 0;
  border-radius: 10px 10px 30px 30px;
  overflow: auto;
  flex-direction: column;
`;

export const Information = styled.p`
  display: flex;
  width: 100%;
  height: auto;
  padding: 3px;
  color: #000000;
  font-size: 22px;
  text-align: left;
`;
