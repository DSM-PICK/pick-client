import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectWrap from "../../../../component/Desktop/Molecules/Attendance/AttendancePlace/AttendancePlaceBackground/SelectWrap/SelectWrap";
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
  const floorData = useSelector(state => state.dAttendance.floorData);

  const [selectFloorArray, setSelectFloorArray] = useState([{}, {}]);

  const {
    getAttendanceStdDataSaga,
    getSelectAttendanceArrSaga,
    setCurrentAttendanceIndexArr,
    setCurrentClassPriority,
    setAttendanceStdData
  } = DAttendanceActionCreater;

  const selectSelfStudyOrClub =
    staticSelectArr[selectSchedule === "교실자습" ? "selfStudy" : "club"];
  const selectArr = [
    selectSelfStudyOrClub,
    {
      header: selectSchedule === "교실자습" ? "반" : "동아리명",
      bodyItem: []
    }
  ];

  const dispatch = useDispatch();
  const dispatchSetCurrentClassPriority = useCallback(
    priority => {
      dispatch(setCurrentClassPriority(priority));
    },
    [dispatch]
  );
  const getSelectAttendanceArr = useCallback(
    payload => {
      dispatch(getSelectAttendanceArrSaga(payload));
    },
    [dispatch]
  );
  const getSelectAttendanceArrPayload = () => {
    return {
      schedule: selectSchedule === "교실자습" ? "self-study" : "club",
      floor: getFloor(selectSelfStudyOrClub.bodyItem[selectArrIndex[0]])
    };
  };
  const setCurrentArrByIndex = (row, col) => {
    const updateArr = getUpdatedArr(row, col);
    const schedule = selectSchedule === "교실자습" ? "class" : "club";

    if (floorData[schedule][updateArr[0]].locations.length) {
      dispatch(
        getAttendanceStdDataSaga({
          schedule: selectSchedule === "교실자습" ? "self-study" : "club",
          floor: 4 - updateArr[0],
          priority:
            floorData[schedule][updateArr[0]].locations[updateArr[1]].priority
        })
      );
    } else {
      setSelectFloorArray([
        staticSelectArr[selectSchedule === "교실자습" ? "selfStudy" : "club"],
        {
          header: selectSchedule === "교실자습" ? "반" : "동아리명",
          bodyItem: []
        }
      ]);

      dispatch(setAttendanceStdData([]));
    }
    dispatch(setCurrentAttendanceIndexArr(getUpdatedArr(row, col)));
  };

  const getUpdatedArr = (row, col) => {
    if (row === 0) {
      return [col, 0];
    }
    return selectArrIndex.map((current, index) => {
      return index === row ? col : current;
    });
  };

  useEffect(() => {
    const { schedule, floor } = getSelectAttendanceArrPayload();
    dispatchSetCurrentClassPriority({ schedule, floor, priority: 0 });
    getSelectAttendanceArr(getSelectAttendanceArrPayload());
  }, []);

  useEffect(() => {
    setSelectFloorArray([
      staticSelectArr[selectSchedule === "교실자습" ? "selfStudy" : "club"],
      {
        header: selectSchedule === "교실자습" ? "반" : "동아리명",
        bodyItem:
          floorData[selectSchedule === "교실자습" ? "class" : "club"]
            .map(data => data.locations)
            [selectArrIndex[0]]?.map(data => data.name) ||
          selectAttendance.map(data => data.name)
      }
    ]);
  }, [floorData, selectSchedule, selectArrIndex, selectAttendance]);

  return (
    <SelectWrap
      selectArr={selectArr}
      currentArr={selectArrIndex}
      selectFloorArray={selectFloorArray}
      onClick={setCurrentArrByIndex}
    />
  );
};

export default React.memo(DesktopSelectWrapContainer);
