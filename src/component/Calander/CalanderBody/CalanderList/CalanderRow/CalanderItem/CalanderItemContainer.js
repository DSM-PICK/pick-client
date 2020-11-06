import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CHANGE_MY_SCHEDULE_STATUS,
  selectFirstDaySaga,
  selectSecondDay,
  SHOW_MY_SCHEDULE_STATUS
} from "../../../../../../module/action/calander";
import CalanderItem from "./CalanderItem";

const CalanderItemContainer = ({
  isActive,
  date,
  month,
  floor2,
  floor3,
  floor4,
  error
}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.calander.state);
  const todayTeacher = useSelector(state => state.calander.todayTeacher);
  const changeScheduleStatus = useSelector(
    state => state.calander.changeScheduleStatus
  );

  const onClick = useCallback(() => {
    if (state !== CHANGE_MY_SCHEDULE_STATUS || error) {
      return;
    }
    if (changeScheduleStatus === 1) {
      dispatch(
        selectFirstDaySaga({
          month,
          date,
          teachers: [
            {
              floor: 2,
              name: floor2
            },
            {
              floor: 3,
              name: floor3
            },
            {
              floor: 4,
              name: floor4
            }
          ]
        })
      );
    } else if (changeScheduleStatus === 2) {
      dispatch(
        selectSecondDay({
          month,
          date,
          teachers: [
            {
              floor: 2,
              name: floor2
            },
            {
              floor: 3,
              name: floor3
            },
            {
              floor: 4,
              name: floor4
            }
          ]
        })
      );
    }
  }, [state, changeScheduleStatus, dispatch]);

  return (
    <CalanderItem
      isActive={isActive}
      isActives={[
        state && floor2 === todayTeacher,
        state && floor3 === todayTeacher,
        state && floor4 === todayTeacher
      ]}
      names={[floor2, floor3, floor4]}
      date={date}
      error={error}
      onClick={onClick}
    />
  );
};

export default CalanderItemContainer;
