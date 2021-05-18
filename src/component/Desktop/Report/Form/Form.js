import React from "react";
import * as S from "../styles";
import Date from "./Date";
import Student from "./Student";
import Type from "./Type";
import Description from "./Description";
import { useDesktopReportState } from "../../../../lib/hooks/desktop/report";

const Form = () => {
  const { state, setState } = useDesktopReportState();
  const { addAttendanceChangeList } = setState;
  const { attendanceChangeStudentList } = state;
  const submitButtonClickHandler = attendanceChangeStudentList => () => {
    addAttendanceChangeList(attendanceChangeStudentList);
  };
  return (
    <S.FormWrapper>
      <S.FormTitle>출결 변동사항 신고</S.FormTitle>
      <S.Form>
        <Student />
        <Date />
        <Type />
        <Description />
        <S.FormColumn>
          <S.FormAddButton
            onClick={submitButtonClickHandler(attendanceChangeStudentList)}
          >
            추가하기
          </S.FormAddButton>
        </S.FormColumn>
      </S.Form>
    </S.FormWrapper>
  );
};

export default Form;
