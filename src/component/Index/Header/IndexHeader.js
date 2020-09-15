import React from "react";
import { useSelector } from "react-redux";
import { IndexIcon } from "../../../asset";
import * as S from "./styles";

const IndexHeader = () => {
  const date = useSelector((state) => state.date);
  return (
    <S.Container>
      <S.Header>
        <img src={IndexIcon} />
        <S.LoginText>
          <S.BoldP>전달사항</S.BoldP>
          <S.P>이곳을 눌러</S.P>
          <S.P>로그인 하기</S.P>
        </S.LoginText>
      </S.Header>
      <S.Body>
        <S.P>오늘은</S.P>
        <S.BoldP>전공동아리</S.BoldP>
        <S.P>
          {date.month}월 {date.date}일
        </S.P>
      </S.Body>
    </S.Container>
  );
};

export default IndexHeader;
