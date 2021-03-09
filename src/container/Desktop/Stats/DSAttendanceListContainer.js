import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import StatsList from "../../../component/Desktop/Molecules/Stats/StatsStdList/StatsStdListBackground/SStdListGrid/StatsList/StatsList";
import { DAttendanceActionCreater } from "../../../module/action/d_attendance";

const DSAttendanceListContainer = props => {
  const { index, name, stdNum, stateList, memo, css } = props;
  const [statesArr, setStatesArr] = useState(
    Object.values(stateList).filter(state => state)
  );

  const startPeriod = 11 - statesArr.length;
  const periodArr = [10, 9, 8, 7].slice(0, statesArr.length).reverse();

  const { patchAttendanceStdDataSaga } = DAttendanceActionCreater;
  const dispatch = useDispatch();
  const patchAttendanceStdData = useCallback(
    (period, value) => {
      dispatch(
        patchAttendanceStdDataSaga({ number: stdNum, period, state: value })
      );
    },
    [dispatch, stdNum]
  );
  const onStateChange = useCallback((period, value) => {
    patchAttendanceStdData(period, value);
    viewChange(period, value);
  }, []);

  return (
    <StatsList
      css={css}
      index={index}
      length={statesArr.length}
      stateList={statesArr}
      periodArr={periodArr}
      onStateChange={onStateChange}
    />
  );
};

export default DSAttendanceListContainer;
