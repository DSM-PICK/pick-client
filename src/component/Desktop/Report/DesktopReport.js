import React, { useEffect } from "react";
import * as S from "./styles";
import Calender from "./Calender";
import Form from "./Form";
import List from "./List";

const DesktopReport = ({ state, setState }) => {
  const { attendanceChangeList } = state;
  const {
    deleteAttendanceChangeStudent,
    setFixAttendanceChangeStudent
  } = setState;
  return (
    <S.DesktopReport>
      <div>
        <Calender />
      </div>
      <div>
        <Form />
        <List
          attendanceChangeList={attendanceChangeList}
          deleteAttendanceChangeStudent={deleteAttendanceChangeStudent}
          setFixAttendanceChangeStudent={setFixAttendanceChangeStudent}
        />
      </div>
    </S.DesktopReport>
  );
};

export default DesktopReport;
