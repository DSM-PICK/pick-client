import React, { useEffect, useState } from "react";
import StatsList from "../../../component/Desktop/Molecules/Stats/StatsStdList/StatsStdListBackground/SStdListGrid/StatsList/StatsList";

const DSAttendanceListContainer = props => {
  const { index, stateList, memo: memoList, css } = props;
  const [statesArr, setStatesArr] = useState(
    Object.values(stateList).filter(state => state)
  );
  const [memoArr, setMemoArr] = useState(
    Object.values(memoList).filter(memo => memo)
  );

  const periodArr = [10, 9, 8, 7].slice(0, statesArr.length).reverse();

  useEffect(() => {
    setStatesArr(Object.values(stateList).filter(state => state));
    setMemoArr(Object.values(memoList).filter(memo => memo));
  }, [stateList, memoList]);

  return (
    <StatsList
      css={css}
      index={index}
      length={statesArr.length}
      stateList={statesArr}
      memoList={memoArr}
      periodArr={periodArr}
    />
  );
};

export default DSAttendanceListContainer;
