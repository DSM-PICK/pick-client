import React from "react";
import * as S from "../styles";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";

const List = () => {
  return (
    <S.FormWrapper>
      <S.FormListTitle>출석 변동사항 목록</S.FormListTitle>
      <S.List>
        <S.FormListContent>
          <ListHeader />
          <ListItem
            date="3월 1일 5교시~7교시"
            student="2212 오준상"
            type="외출"
            teacher="김정은"
            description="코로나 검사하러"
          />
        </S.FormListContent>
      </S.List>
    </S.FormWrapper>
  );
};

export default List;
