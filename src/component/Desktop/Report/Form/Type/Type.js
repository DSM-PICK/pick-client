import React from "react";
import { useDesktopReportState } from "../../../../../lib/hooks/desktop/report";
import * as S from "../../styles";
import FormTypeButtons from "./FormTypeButtons";

const Type = () => {
  const { state, setState } = useDesktopReportState();
  const { attendanceChangeType } = state;
  const { setAttendanceChangeType } = setState;
  return (
    <S.FormType>
      <S.FormText>종류</S.FormText>
      <FormTypeButtons
        type={attendanceChangeType}
        setType={setAttendanceChangeType}
      />
    </S.FormType>
  );
};

export default Type;
