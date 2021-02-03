import React from "react";
import * as S from "./styles";
import Calender from "./Calender";
import Form from "./Form";
import List from "./List";

const DesktopReport = ({ state, setState }) => {
  const {
    attendanceChangeStudentList,
    attendanceChangeType,
    description,
    selectedDate,
    attendanceChangeList,
    selectedStudent
  } = state;
  const {
    setSelectedDate,
    setAttendanceChangeStudent,
    setAttendanceChangeType,
    setDescription,
    getAttendanceChangeList,
    setSelectedStudent,
    deleteAttendanceChangeStudent
  } = setState;
  return (
    <S.DesktopReport>
      <div>
        <Calender
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
      <div>
        <Form
          attendanceChangeStudentList={attendanceChangeStudentList}
          attendanceChangeType={attendanceChangeType}
          description={description}
          setAttendanceChangeStudent={setAttendanceChangeStudent}
          setAttendanceChangeType={setAttendanceChangeType}
          setDescription={setDescription}
          setSelectedStudent={setSelectedStudent}
          selectedStudent={selectedStudent}
          selectedDate={selectedDate}
          deleteAttendanceChangeStudent={deleteAttendanceChangeStudent}
        />
        <List attendanceChangeList={attendanceChangeList} />
      </div>
    </S.DesktopReport>
  );
};

export default DesktopReport;
