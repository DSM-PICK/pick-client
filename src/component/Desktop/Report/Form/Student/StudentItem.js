import React from "react";
import * as S from "../../styles";

const StudentItem = ({
  number,
  name,
  setSelectedStudent,
  selectedStudent,
  id,
  deleteAttendanceChangeStudent
}) => {
  const itemClickHandler = id => {
    return () => setSelectedStudent(id);
  };
  const deleteButtonClickHandler = id => {
    return () => deleteAttendanceChangeStudent(id);
  };
  return (
    <>
      <S.FormStudentItem
        isActive={selectedStudent === id}
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
    </>
  );
};

export default StudentItem;
