import React from "react";
import { Link, useLocation } from "react-router-dom";
import * as S from "./style";

const FooterItem = props => {
  const { assetLink, assetOnLink, link, text } = props;

  const getPathnameSliceBySlash = () => {
    return location.pathname.split("/").slice(0, 3).join("/"); // ex) /t/main
  };
  const isHereOnLink = (slicedPathname, link) => {
    return slicedPathname === link;
  };
  const getLinkOrOnLink = isHere => {
    return isHere ? assetOnLink : assetLink;
  };

  const location = useLocation();
  const slicedPathname = getPathnameSliceBySlash();
  const isHere = isHereOnLink(slicedPathname, link);
  const imgLink = getLinkOrOnLink(isHere);

  return (
    <S.Container as={Link} to={link}>
      <S.ItemImg src={imgLink} />
      <S.ItemText isHere={isHere}>{text}</S.ItemText>
    </S.Container>
  );
};

export default FooterItem;
