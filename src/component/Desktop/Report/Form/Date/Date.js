import React from "react";
import * as S from "../../styles";

const Date = ({ date, setDate }) => {
  const renderDate = date => {
    if (!date.year || !date.month || !date.date) {
      return "좌측 캘린더에서 날짜를 클릭하세요.";
    }
    return `${date.month}월 ${date.date}일 5교시 ~ 6교시`;
  };
  return (
    <S.FormDate>
      <S.FormText>결석일</S.FormText>
      <S.FormDateInput>{renderDate(date)}</S.FormDateInput>
    </S.FormDate>
  );
};

export default Date;
