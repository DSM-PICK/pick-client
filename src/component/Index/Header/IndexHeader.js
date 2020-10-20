import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { IndexIcon } from "../../../asset";
import LoginModal from "./Modal/LoginModal";
import * as S from "./styles";

const IndexHeader = () => {
  const date = useSelector(state => state.date);
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const changeLoginModalIsOpen = useCallback(() => {
    setLoginModalIsOpen(prev => !prev);
  }, []);
  return (
    <S.Container>
      <S.Header>
        <img src={IndexIcon} />
        <S.LoginText>
          <S.BoldP>전달사항</S.BoldP>
          <div onClick={changeLoginModalIsOpen}>
            <S.P>이곳을 눌러</S.P>
            <S.P>로그인 하기</S.P>
          </div>
        </S.LoginText>
      </S.Header>
      <S.Body>
        <S.P>오늘은</S.P>
        <S.BoldP>전공동아리</S.BoldP>
        <S.P>
          {date.month}월 {date.date}일
        </S.P>
      </S.Body>
      {loginModalIsOpen && <LoginModal closeModal={changeLoginModalIsOpen} />}
    </S.Container>
  );
};

export default IndexHeader;
