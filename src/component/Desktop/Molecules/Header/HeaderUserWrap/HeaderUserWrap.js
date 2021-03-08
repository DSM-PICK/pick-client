import React from "react";
import { DropDownArrow } from "../../../../../asset/Desktop";
import Img from "../../../Atoms/Img/Img";
import * as S from "./styles";

const HeaderUserWrap = props => {
  const { userName } = props;

  return (
    <S.Container>
      <S.UserName>{`${userName} 선생님`}</S.UserName>
      <Img src={DropDownArrow} css={S.ImgCSS} />
      <S.UserWrapModal>
        <S.ModalNavLink to="/mypage">마이페이지</S.ModalNavLink>
        <S.ModalNavLink to="/auth" color="#FF406E">
          로그아웃
        </S.ModalNavLink>
      </S.UserWrapModal>
    </S.Container>
  );
};

export default HeaderUserWrap;
