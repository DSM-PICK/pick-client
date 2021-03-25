import React, { useCallback, useEffect, useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import StdListBody from "../../../../component/Desktop/Molecules/Attendance/AttendanceStdList/AttendanceStdListBackground/StdListBody/StdListBody";
import { DAttendanceActionCreater } from "../../../../module/action/d_attendance";

const DesktopStdListBodyContainer = () => {
  const dispatch = useDispatch();
  const attendanceLists = useSelector(
    state => state.dAttendance.attendanceData,
    shallowEqual
  );
  const currentClassPriority = useSelector(
    state => state.dAttendance.currentClassPriority
  );

  const [prevAttList, setPrevAttList] = useState(attendanceLists);
  const [prevClassPriority, setPrevClassPriority] = useState(
    currentClassPriority
  );
  const [isFirst, setIsFirst] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);

  const { setSelectArr, setSelectAll } = DAttendanceActionCreater;

  const dispatchNewSelectArr = useCallback(attList => {
    const newSelectArr = Array.from(
      { length: attList ? attList.length : 0 },
      () => false
    );
    dispatch(setSelectArr(newSelectArr));
    dispatch(setSelectAll(false));
  }, []);

  useEffect(() => {
    if (isFirst) {
      const newSelectArr = Array.from(
        { length: attendanceLists ? attendanceLists.length : 0 },
        () => false
      );

      dispatch(setSelectArr(newSelectArr));
      newSelectArr.length && setIsFirst(false);
    }
  }, [isFirst, attendanceLists]);
  useEffect(() => {
    setPrevClassPriority(currentClassPriority);
  }, [currentClassPriority]);
  useEffect(() => {
    setPrevAttList(attendanceLists);
  }, [attendanceLists]);
  useEffect(() => {
    if (
      JSON.stringify(prevClassPriority) !== JSON.stringify(currentClassPriority)
    ) {
      setIsUpdate(true);
    }
    if (
      isUpdate &&
      JSON.stringify(prevAttList) !== JSON.stringify(attendanceLists)
    ) {
      setIsUpdate(false);
      dispatchNewSelectArr(attendanceLists);
    }
  }, [
    isUpdate,
    prevAttList,
    attendanceLists,
    prevClassPriority,
    currentClassPriority
  ]);

  return <StdListBody attendanceLists={attendanceLists} />;
};

export default React.memo(DesktopStdListBodyContainer);
