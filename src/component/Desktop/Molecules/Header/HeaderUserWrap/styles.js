import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 122px;
  height: 100%;
  padding: 0;
  border: none;
  outline: none;
  background: none;

  &:hover {
    cursor: pointer;
  }

  &:hover > div {
    display: flex;
  }
`;

export const UserName = styled.div`
  width: max-content;
  height: max-content;
  color: #000000;
  font-size: 16px;
  font-weight: 400;
`;

export const ImgCSS = {
  width: "16px",
  height: "8px"
};

export const UserWrapModal = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  top: 61px;
  z-index: 3;
  width: 110px;
  height: 82px;
  border-radius: 0 0 8px 8px;
  background: #ffffff;
  box-shadow: 0px 4px 4px 2px rgb(144 144 144 / 20%);

  &:hover {
    display: flex;
  }
`;

export const ModalNavLink = styled(NavLink)`
  width: 100%;
  color: ${props => props.color || "#000000"};
  font-size: 16px;
  text-decoration: none;
`;
