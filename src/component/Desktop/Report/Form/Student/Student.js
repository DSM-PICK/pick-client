import React, { useEffect, useState } from "react";
import * as S from "../../styles";
import StudentItem from "./StudentItem";
import StudentAddButton from "./StudentAddButton";
import StudentAddInput from "./StudentAddInput";
import { useDesktopReportState } from "../../../../../lib/hooks/desktop/report";

const Student = () => {
  const [pressShift, setPressShift] = useState(false);
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
  const renderStudentItem = attendanceChangeStudentList =>
    attendanceChangeStudentList.map((student, index) => (
      <StudentItem
        number={student.number}
        name={student.name}
        id={student.id}
        setSelectedStudent={setSelectedStudent}
        selectedStudent={selectedStudent}
        deleteAttendanceChangeStudent={deleteAttendanceChangeStudent}
        pressShift={pressShift}
        key={`${student.name}-${student.id}-${student.number}`}
        addSelectedStudentIndexToIndex={getAddSelectedStudentIndexToIndex(
          index
        )}
      />
    ));
  const setKeyDownEventOnDocument = () => {
    document.addEventListener("keydown", () => {
      setPressShift(true);
    });
  };
  const setKeyUpEventOnDocument = () => {
    document.addEventListener("keyup", () => {
      setPressShift(false);
    });
  };
  const getSelectedStudentIndex = () => {
    for (let i in attendanceChangeStudentList) {
      if (attendanceChangeStudentList[i].id === selectedStudent[0]) {
        return parseInt(i);
      }
    }
  };
  const getAddSelectedStudentIndexToIndex = endIndex => {
    const startIndex = getSelectedStudentIndex();
    return () => {
      const cuttedCopyStudentList = attendanceChangeStudentList.map(
        (student, index) => {
          if (
            (startIndex <= index && endIndex >= index) ||
            (startIndex >= index && endIndex <= index)
          ) {
            return student.id;
          }
        }
      );
      setSelectedStudent(cuttedCopyStudentList);
    };
  };
  const removeEvents = () => {
    document.removeEventListener("keydown", () => setPressShift(true));
    document.removeEventListener("keyup", () => setPressShift(false));
  };
  useEffect(() => {
    setKeyUpEventOnDocument();
    setKeyDownEventOnDocument();
    return () => removeEvents();
  }, []);
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
