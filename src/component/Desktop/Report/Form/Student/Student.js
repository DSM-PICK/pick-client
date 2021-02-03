import React from "react";
import * as S from "../../styles";
import StudentItem from "./StudentItem";
import StudentAddButton from "./StudentAddButton";

const Student = ({
  setSelectedStudent,
  selectedStudent,
  setAttendanceChangeStudent,
  deleteAttendanceChangeStudent,
  attendanceChangeStudentList
}) => {
  const renderStudentItem = studentList =>
    studentList.map(student => (
      <StudentItem
        number={student.number}
        name={student.name}
        id={student.id}
        setSelectedStudent={setSelectedStudent}
        selectedStudent={selectedStudent}
        deleteAttendanceChangeStudent={deleteAttendanceChangeStudent}
      />
    ));
  return (
    <S.FormStudent>
      <S.FormText>결석자</S.FormText>
      <S.FormStudentWrapper>
        {renderStudentItem(attendanceChangeStudentList)}
        <StudentAddButton />
      </S.FormStudentWrapper>
    </S.FormStudent>
  );
};

export default Student;
