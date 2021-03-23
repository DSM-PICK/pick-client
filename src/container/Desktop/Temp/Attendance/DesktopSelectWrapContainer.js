import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectWrap from "../../../../component/Desktop/Molecules/Temp/AttendancePlace/AttendancePlaceBackground/SelectWrap/SelectWrap";
import { getFloor } from "../../../../lib/attendanceApi";
import { DAttendanceActionCreater } from "../../../../module/action/d_attendance";
import { staticSelectArr } from "./StaticData";

const DesktopSelectWrapContainer = () => {
  const { selectAttendanceArr: selectAttendance } = useSelector(
    state => state.dAttendance
  );
  const { currentAttendanceIndexArr: selectArrIndex } = useSelector(
    state => state.dAttendance
  );
  const selectSchedule = useSelector(state => state.toggle.selectSchedule);

  const {
    getAttendanceStdDataSaga,
    getSelectAttendanceArrSaga,
    setCurrentAttendanceIndexArr
  } = DAttendanceActionCreater;

  const selectSelfStudyOrClub =
    staticSelectArr[selectSchedule === "교실자습" ? "selfStudy" : "club"];
  const selectArr = [
    selectSelfStudyOrClub,
    {
      header: selectSchedule === "교실자습" ? "반" : "동아리명",
      bodyItem: selectAttendance.map(data => data.name)
    }
  ];

  const dispatch = useDispatch();
  const getSelectAttendanceArr = useCallback(
    payload => {
      dispatch(getSelectAttendanceArrSaga(payload));
    },
    [dispatch]
  );
  const getSelectAttendanceArrPayload = useCallback(() => {
    return {
      schedule: getSelectSchedule() === "교실자습" ? "self-study" : "club",
      floor: getFloor(selectSelfStudyOrClub.bodyItem[selectArrIndex[0]])
    };
  }, [selectSelfStudyOrClub, selectArrIndex]);
  const setCurrentArrByIndex = useCallback(
    (row, col) => {
      dispatchGetAttendanceStdData(
        getSelectSchedule(),
        row,
        ...getUpdatedArr(row, col)
      );
      dispatch(setCurrentAttendanceIndexArr(getUpdatedArr(row, col)));
    },
    [dispatch, selectAttendance]
  );
  const dispatchGetAttendanceStdData = useCallback(
    (textSchedule, rowIndex, row, col) => {
      const schedule = textSchedule === "교실자습" ? "self-study" : "club";

      dispatch(
        getAttendanceStdDataSaga({
          schedule,
          floor: 4 - row,
          priority: selectAttendance.filter(
            (_, filterIndex) => filterIndex === col
          )[0].priority
        })
      );

      if (!rowIndex) {
        dispatch(getSelectAttendanceArrSaga({ schedule, floor: 4 - row }));
      }
    },
    [dispatch, selectAttendance]
  );
  const getUpdatedArr = useCallback(
    (row, col) => {
      if (row === 0) {
        return [col, 0];
      }
      return selectArrIndex.map((current, index) => {
        return index === row ? col : current;
      });
    },
    [selectArrIndex]
  );

  const getSelectSchedule = useCallback(() => selectSchedule, [selectSchedule]);

  useEffect(() => {
    getSelectAttendanceArr(getSelectAttendanceArrPayload());
  }, []);

  return (
    <SelectWrap
      selectArr={selectArr}
      currentArr={selectArrIndex}
      onClick={setCurrentArrByIndex}
    />
  );
};

export default React.memo(DesktopSelectWrapContainer);
