import styled from "styled-components";

export const Container = styled.div``;

export const Toggle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 128px;
  height: 20px;
  padding: 1px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 0px 1px 1px 0px rgba(144, 144, 144, 0.2);

  &:hover {
    cursor: pointer;
  }
`;

export const ToggleText = styled.div`
  position: relative;
  z-index: 3;
  color: ${props => (props.state === props.toggle ? "#909090" : "#ffffff")};
  font-size: 12px;
  font-weight: 400;
  user-select: none;
  padding: 0 2px;
  transition: all 0.3s ease-in-out;
`;

export const ToggleItem = styled.div`
  position: absolute;
  z-index: 2;
  width: ${props => (props.toggle ? "68px" : "56px")};
  height: 100%;
  border-radius: 5px;
  background: rgba(64, 108, 255, 1);
  left: ${props => (props.toggle ? "calc(100% - 68px)" : "0")};
  transition: all 0.3s ease-in-out;
`;
