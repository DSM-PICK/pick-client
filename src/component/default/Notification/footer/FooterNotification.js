import React from "react";
import * as S from "../styles";

const FooterNotification = ({ children, onClick }) => {
  return <S.FooterContainer onClick={onClick}>{children}</S.FooterContainer>;
};

export default FooterNotification;
