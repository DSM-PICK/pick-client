import React, { useState } from "react";
import * as S from "../../styles";
import StudentItem from "./StudentItem";
import StudentAddButton from "./StudentAddButton";
import StudentAddInput from "./StudentAddInput";
import { useDesktopReportState } from "../../../../../lib/hooks/desktop/report";

const Student = () => {
  const { state, setState } = useDesktopReportState();
  const {
    selectedStudent,
    attendanceChangeStudentList,
    similerStudents
  } = state;
  const {
    deleteAttendanceChangeStudent,
    setSelectedStudent,
    setNewAttendanceChangeStudent,
    getSimilerStudent
  } = setState;
  const [isStudentAdding, setIsStudentAdding] = useState(false);
  const addButtonClickHandler = () => {
    setIsStudentAdding(true);
  };
  const inputChangeHandler = value => {
    getSimilerStudent(value);
  };
  const studentClickHandler = value => {
    const [number, name] = value.split(" ");
    setNewAttendanceChangeStudent({
      number,
      name
    });
    setIsStudentAdding(false);
    getSimilerStudent("");
  };
  const renderStudentItem = studentList =>
    studentList.map(student => (
      <StudentItem
        number={student.number}
        name={student.name}
        id={student.id}
        setSelectedStudent={setSelectedStudent}
        selectedStudent={selectedStudent}
        deleteAttendanceChangeStudent={deleteAttendanceChangeStudent}
        key={`${student.name}-${student.id}-${student.number}`}
      />
    ));
  return (
    <S.FormStudent>
      <S.FormText>결석자</S.FormText>
      <S.FormStudentWrapper>
        {renderStudentItem(attendanceChangeStudentList)}
        {isStudentAdding ? (
          <StudentAddInput
            inputChangeHandler={inputChangeHandler}
            similerStudents={similerStudents}
            studentClickHandler={studentClickHandler}
          />
        ) : (
          <StudentAddButton buttonClickHandler={addButtonClickHandler} />
        )}
      </S.FormStudentWrapper>
    </S.FormStudent>
  );
};

export default Student;
