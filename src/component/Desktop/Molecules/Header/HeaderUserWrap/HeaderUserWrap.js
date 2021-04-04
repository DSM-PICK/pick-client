import React from "react";
import { DropDownArrow } from "../../../../../asset/Desktop";
import Img from "../../../Atoms/Img/Img";
import * as S from "./styles";

const HeaderUserWrap = props => {
  const { userName } = props;
  const { onLogout } = props;

  return (
    <S.Container>
      <S.UserName>{`${userName} 선생님`}</S.UserName>
      <Img src={DropDownArrow} css={S.ImgCSS} />
      <S.UserWrapModal>
        <S.ModalButton onClick={onLogout} color="#000000">
          비밀번호 변경
        </S.ModalButton>
        <S.ModalButton onClick={onLogout} color="#FF406E">
          로그아웃
        </S.ModalButton>
      </S.UserWrapModal>
    </S.Container>
  );
};

export default HeaderUserWrap;
