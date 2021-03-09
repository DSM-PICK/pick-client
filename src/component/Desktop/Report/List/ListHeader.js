import React from "react";
import * as S from "../styles";

const ListItem = () => {
  return (
    <S.FormListItem isHeader={true}>
      <div className="date header">결석일</div>
      <div className="student header">결석자</div>
      <div className="type header">종류</div>
      <div className="teacher header">신고자</div>
      <div className="description header">비고</div>
    </S.FormListItem>
  );
};

export default ListItem;
