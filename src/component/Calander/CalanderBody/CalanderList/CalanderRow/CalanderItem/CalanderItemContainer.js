import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CHANGE_MY_SCHEDULE_STATUS,
  selectFirstDaySaga,
  selectSecondDay,
  SHOW_MY_SCHEDULE_STATUS,
} from "../../../../../../module/action/calander";
import CalanderItem from "./CalanderItem";

const CalanderItemContainer = ({ isActive, date, month, teachers }) => {
  useEffect(() => {
    console.log("CalanderItemContainer");
  });
  const dispatch = useDispatch();
  const state = useSelector((state) => state.calander.state);
  const todayTeacher = useSelector((state) => state.calander.todayTeacher);
  const changeScheduleStatus = useSelector(
    (state) => state.calander.changeScheduleStatus
  );

  const onClick = useCallback(() => {
    if (state !== CHANGE_MY_SCHEDULE_STATUS) {
      return;
    }
    if (changeScheduleStatus === 1) {
      dispatch(selectFirstDaySaga({ month, date, teachers }));
    } else if (changeScheduleStatus === 2) {
      dispatch(selectSecondDay({ month, date, teachers }));
    }
  }, [state, changeScheduleStatus, dispatch]);

  const [floor2, floor3, floor4] = teachers;

  return (
    <CalanderItem
      isActive={isActive}
      isActives={[
        state === SHOW_MY_SCHEDULE_STATUS && floor2.name === todayTeacher,
        state === SHOW_MY_SCHEDULE_STATUS && floor3.name === todayTeacher,
        state === SHOW_MY_SCHEDULE_STATUS && floor4.name === todayTeacher,
      ]}
      names={[floor2.name, floor3.name, floor4.name]}
      date={date}
      onClick={onClick}
    />
  );
};

export default CalanderItemContainer;
