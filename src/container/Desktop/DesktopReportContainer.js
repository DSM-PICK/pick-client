import React, { useEffect } from "react";
import DesktopReport from "../../component/Desktop/Report";
import { useDesktopReportState } from "../../lib/hooks/desktop/report";
import DesktopHeaderContainer from "./Header/DesktopHeaderContainer";

const DesktopReportContainer = () => {
  const { state, setState } = useDesktopReportState();
  useEffect(() => {
    setState.getAttendanceChangeList();
  }, [state.selectedDate]);
  return (
    <>
      <DesktopHeaderContainer />
      <DesktopReport state={state} setState={setState} />
    </>
  );
};

export default DesktopReportContainer;
