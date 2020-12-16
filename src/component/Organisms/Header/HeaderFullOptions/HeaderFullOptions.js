import React from "react";
import * as S from "./styles";
import HeaderDate from "../../../Atoms/HeaderItem/HeaderDate/HeaderDate";
import HeaderTitle from "../../../Atoms/HeaderItem/HeaderTitle/HeaderTitle";
import HeaderBackBtn from "../../../Atoms/HeaderItem/HeaderBackBtn/HeaderBackBtn";
import HeaderTeacher from "../../../Atoms/HeaderItem/HeaderTeacher/HeaderTeacher";
import Header from "../Header";

const HeaderFullOptions = props => {
  const { link, title, month, day, dayOfWeek, name } = props;

  return (
    <Header>
      <S.HeaderWrap>
        <S.TitleWrap>
          <HeaderBackBtn link={link} />
          <HeaderTitle title={title} />
        </S.TitleWrap>
        <HeaderDate month={month} day={day} dayOfWeek={dayOfWeek} />
        <S.TeacherWrap>
          <HeaderTeacher name={name} />
        </S.TeacherWrap>
      </S.HeaderWrap>
    </Header>
  );
};

export default HeaderFullOptions;
