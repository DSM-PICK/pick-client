import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 750px;
  background: #2764a7;
  margin-top: auto;
  font-size: 38px;
  font-weight: bold;
  color: white;
  align-items: center;
  justify-content: center;
`;

export const Animation = styled.div`
  position: absolute;
  display: flex;
  bottom: 150px;
  left: 50%;
  transform: translateX(-50%);
  width: 236px;
  height: 48px;
  background: #2764a7;
  border-radius: 48px;
  font-size: 26px;
  color: white;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.saveAni ? 1 : 0)};

  transition: all 0.3s ease-in-out;
`;
