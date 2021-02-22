import React from "react";
import * as S from "../styles";

const ListItem = ({
  date,
  item,
  student,
  type,
  teacher,
  description,
  deleteAttendanceChangeStudent,
  setFixAttendanceChangeStudent,
  id
}) => {
  const deleteButtonClickHandler = event => {
    deleteAttendanceChangeStudent(id);
  };
  const fixButtonClickHandler = event => {
    setFixAttendanceChangeStudent(item);
  };
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
          <div onClick={fixButtonClickHandler}>수정</div>
          <div
            className="listItemDeleteButton"
            onClick={deleteButtonClickHandler}
          >
            삭제
          </div>
        </S.FormListItemMenu>
      </label>
    </S.FormListItem>
  );
};

export default ListItem;
