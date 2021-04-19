import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import StdListBody from "../../../../component/Desktop/Molecules/Attendance/AttendanceStdList/AttendanceStdListBackground/StdListBody/StdListBody";
import { DAttendanceActionCreater } from "../../../../module/action/d_attendance";

const DesktopStdListBodyContainer = () => {
  const dispatch = useDispatch();
  const attendanceLists = useSelector(
    state => state.dAttendance.attendanceData
  );
  const currentClassPriority = useSelector(
    state => state.dAttendance.currentClassPriority
  );

  const [disableStudentStateArray, setDisableStudentStateArray] = useState([]);
  const [prevAttList, setPrevAttList] = useState(attendanceLists);
  const [prevClassPriority, setPrevClassPriority] = useState(
    currentClassPriority
  );
  const [isFirst, setIsFirst] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);

  const {
    setSelectArr,
    setSelectAll,
    setSelectArrWithDisable
  } = DAttendanceActionCreater;

  const disableState = ["취업", "기초학력", "방과후"];
  useEffect(() => {
    if (attendanceLists.length) {
      const length = Object.values(attendanceLists[0].state).filter(
        state => state !== null
      ).length;
      const newAllStudentStateArray = attendanceLists.map(studentData => ({
        gradeClassNumber: studentData.gradeClassNumber,
        name: studentData.name,
        memoArr: Object.values(studentData.memo)
          .reverse()
          .slice(0, length)
          .reverse(),
        stateArr: Object.values(studentData.state)
          .reverse()
          .slice(0, length)
          .reverse()
      }));
      const newDisableStudentStateArray = newAllStudentStateArray.map(stdData =>
        !~disableState.findIndex(
          disableState => disableState === stdData.stateArr[0]
        )
          ? false
          : true
      );

      setDisableStudentStateArray(newDisableStudentStateArray);
    }
  }, [attendanceLists]);

  const dispatchNewSelectArr = useCallback(attList => {
    const newSelectArr = Array.from(
      { length: attList ? attList.length : 0 },
      () => false
    );
    dispatch(setSelectArr(newSelectArr));
    dispatch(setSelectAll(false));
  }, []);

  useEffect(() => {
    if (attendanceLists.length) {
      const length = Object.values(attendanceLists[0].state).filter(
        state => state !== null
      ).length;
      const newAllStudentStateArray = attendanceLists.map(studentData => ({
        gradeClassNumber: studentData.gradeClassNumber,
        name: studentData.name,
        memoArr: Object.values(studentData.memo)
          .reverse()
          .slice(0, length)
          .reverse(),
        stateArr: Object.values(studentData.state)
          .reverse()
          .slice(0, length)
          .reverse()
      }));

      dispatch(
        setSelectArrWithDisable(
          newAllStudentStateArray.map(stdData =>
            !~disableState.findIndex(
              disableState => disableState === stdData.stateArr[0]
            )
              ? false
              : "disabled"
          )
        )
      );
    } else {
      const newSelectArr = Array.from(
        { length: attendanceLists ? attendanceLists.length : 0 },
        () => false
      );
      dispatch(setSelectArrWithDisable(newSelectArr));
    }
  }, [attendanceLists]);
  useEffect(() => {
    if (isFirst) {
      const newSelectArr = Array.from(
        { length: attendanceLists ? attendanceLists.length : 0 },
        () => false
      );

      dispatch(setSelectArr(newSelectArr));
      setIsFirst(false);
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

  return (
    <StdListBody
      attendanceLists={attendanceLists}
      disableStudentStateArray={disableStudentStateArray}
    />
  );
};

export default React.memo(DesktopStdListBodyContainer);
