import React from "react";
import * as S from "../styles";

const ListItem = ({ date, student, type, teacher, description }) => {
  return (
    <S.FormListItem className="content">
      <div className="date">{date}</div>
      <div className="student">{student}</div>
      <div className="type">{type}</div>
      <div className="teacher">{teacher}</div>
      <div className="description">{description}</div>
      <label className="menu">
        <div />
        <div />
        <div />
        <input type="checkbox" />
        <S.FormListItemMenu>
          <div>수정</div>
          <div className="listItemDeleteButton">삭제</div>
        </S.FormListItemMenu>
      </label>
    </S.FormListItem>
  );
};

export default ListItem;
