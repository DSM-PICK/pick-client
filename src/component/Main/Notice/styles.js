import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  width: calc(100% - 40px);
  height: 200px;
  margin: 10px 0;
  border-radius: 60px;
  box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.16);
  background: #fafafa;
  padding: 20px 20px 10px 20px !important;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    width: 1px;
    height: 100%;
    background: #d0d0d0;
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
  font-size: 18px;
  font-weight: bold;
  align-items: center;
`;

export const InformationWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: ${props => (props.attr === "club" ? "0 0 0 20px" : "0 20px 0 0")};
  overflow-x: hidden;
  overflow-y: auto;
  flex-direction: column;
  box-sizing: border-box;
`;

export const Information = styled.p`
  display: flex;
  width: 100%;
  height: auto;
  padding: 5px;
  color: #808080;
  font-size: 16px;
  text-align: left;
`;
