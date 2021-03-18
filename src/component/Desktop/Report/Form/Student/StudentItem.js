import React from "react";
import * as S from "../../styles";

const StudentItem = ({
  number,
  name,
  setSelectedStudent,
  selectedStudent,
  selectedIndex,
  id,
  deleteAttendanceChangeStudent,
  pressShift,
  addSelectedStudentIndexToIndex
}) => {
  const itemClickHandler = id => {
    return () => {
      if (pressShift) {
        addSelectedStudentIndexToIndex();
      } else {
        setSelectedStudent([id]);
      }
    };
  };
  const deleteButtonClickHandler = id => {
    return () => deleteAttendanceChangeStudent(id);
  };
  const isSelectedStudent = (selectedStudent, id) => {
    for (let i of selectedStudent) {
      if (i === id) {
        return true;
      }
    }
    return false;
  };
  return (
    <S.FormStudentItem
      isActive={isSelectedStudent(selectedStudent, id)}
      onClick={itemClickHandler(id)}
    >
      <div>
        <p>{number}</p>
        <p>{name}</p>
      </div>
      <p className="delete" onClick={deleteButtonClickHandler(id)}>
        삭제
      </p>
    </S.FormStudentItem>
  );
};

export default StudentItem;
