import React, { useEffect } from "react";
import DesktopReport from "../../component/Desktop/Report";
import { useDesktopReportState } from "../../lib/hooks/desktop/report";

const DesktopReportContainer = () => {
  const { state, setState } = useDesktopReportState();
  useEffect(() => {
    const { year, month, date } = state.selectedDate;
    setState.getAttendanceChangeList(`${year}-${month}-${date}`);
  }, [state.selectedDate]);
  return <DesktopReport state={state} setState={setState} />;
};

export default DesktopReportContainer;
