import React from "react";
import * as S from "../styles";
import Date from "./Date";
import Student from "./Student";
import Type from "./Type";
import Description from "./Description";

const Form = ({
  attendanceChangeStudentList,
  attendanceChangeType,
  description,
  setAttendanceChangeStudent,
  setAttendanceChangeType,
  setDescription,
  setSelectedStudent,
  selectedStudent,
  selectedDate,
  deleteAttendanceChangeStudent
}) => {
  return (
    <S.FormWrapper>
      <S.FormTitle>출석 변동사항 신고</S.FormTitle>
      <S.Form>
        <Student
          setSelectedStudent={setSelectedStudent}
          selectedStudent={selectedStudent}
          setAttendanceChangeStudent={setAttendanceChangeStudent}
          attendanceChangeStudentList={attendanceChangeStudentList}
          deleteAttendanceChangeStudent={deleteAttendanceChangeStudent}
        />
        <Date date={selectedDate} />
        <Type setType={setAttendanceChangeType} type={attendanceChangeType} />
        <Description
          description={description}
          setDescription={setDescription}
        />
        <S.FormColumn>
          <S.FormAddButton>추가하기</S.FormAddButton>
        </S.FormColumn>
      </S.Form>
    </S.FormWrapper>
  );
};

export default Form;
