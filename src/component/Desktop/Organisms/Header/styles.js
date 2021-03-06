import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  width: 100%;
  height: 60px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 1px 1px 0px rgba(144, 144, 144, 0.2);

  @media screen and (max-width: 1200px) {
    width: 1200px;
  }
`;

export const Wrap = styled.div`
  display: grid;
  align-items: center;
  gap: 40px;
  grid-template: 1fr / 1fr 400px 130px;
  width: 1200px;
  height: 100%;
`;

export const GridItem = styled.div``;

export const ImgWrap = styled(NavLink)`
  display: flex;
  align-items: center;
`;
export const ImgCSS = {
  width: "113px",
  height: "25px"
};

export const NavLinkWrap = styled.div`
  display: flex;
`;
export const NavLinkCSS = {
  width: "max-content",
  height: "23px",
  color: "#909090",
  fontSize: "16px",
  fontWeight: "400",
  color_hover: "#505050",
  display: "flex",
  alignitems: "center",
  justifycontent: "center"
};
export const NavLinkActiveStyle = {
  width: "max-content",
  height: "23px",
  color: "#000000",
  fontSize: "16px",
  fontWeight: "700"
};
