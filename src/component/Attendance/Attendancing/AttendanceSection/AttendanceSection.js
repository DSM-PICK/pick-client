import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import AttendanceRowTop from "./AttendanceRowTop/AttendanceRowTop";
import AttendanceRow from "./AttendanceRow/AttendanceRow";
import { useDispatch, useSelector } from "react-redux";
import { getLocationState } from "../../../../lib/attendanceApi";
import { setCheckAll, setCheckArr } from "../../../../module/action/attendance";
import AttendanceRowContainer from "./AttendanceRow/AttendanceRowContainer";

const AttendanceSection = props => {
  try {
    const { location, name: clubName } = props.locations;

    const dispatch = useDispatch();
    const { checkArr } = useSelector(state => state.attendance);
    const { checkAll } = useSelector(state => state.attendance);
    const { clubHead } = useSelector(state => state.attendance);
    const { attendanceData } = useSelector(state => state.attendance);
    const { currentClassInfo } = useSelector(state => state.attendance);

    const [allStudentStateArray, setAllStudentStateArray] = useState([]);
    const [prevClassInfo, setPrevClassInfo] = useState(currentClassInfo);
    const [stdStateArr, setStdStateArr] = useState(
      !!Object.values(attendanceData).length
        ? attendanceData.map(data =>
            Object.values(data.state).filter(state => !!state)
          )
        : []
    );
    const [first, setFirst] = useState(true);

    const disableState = ["취업", "기초학력"];
    const isSevenNull =
      attendanceData.length && attendanceData[0].state.seven === null;
    const stateData =
      attendanceData.length && attendanceData.map(data => data.state);
    const employmentCount =
      stateData &&
      stateData.filter(
        state =>
          ~disableState.findIndex(disableState => disableState === state.eight)
      ).length;

    const dispatchSetCheckAll = useCallback(
      checkAllState => {
        dispatch(setCheckAll(checkAllState));
      },
      [dispatch]
    );
    const dispatchSetCheckArr = useCallback(
      checkArray => {
        dispatch(setCheckArr(checkArray));
      },
      [dispatch]
    );

    const checkArrAll = useCallback(() => {
      dispatchSetCheckArr(
        Array.from(
          { length: attendanceData ? attendanceData.length : 0 },
          () => !checkAll
        )
      );
    }, [checkAll, attendanceData]);
    const handleCheckArr = useCallback(
      index => {
        dispatchSetCheckArr(
          checkArr.map((check, mapIndex) =>
            mapIndex === index ? !check : check
          )
        );
      },
      [checkArr]
    );

    useEffect(() => {
      attendanceData.length &&
        setAllStudentStateArray(
          !isSevenNull
            ? attendanceData.map(data =>
                Object.values(data.state).map((_, idx) => ({
                  memo: Object.values(data.memo)[idx],
                  state: Object.values(data.state)[idx]
                }))
              )
            : attendanceData
                .map(data =>
                  Object.values(data.state).map((_, idx) => ({
                    memo: Object.values(data.memo)[idx],
                    state: Object.values(data.state)[idx]
                  }))
                )
                .map(data => data.slice(1))
        );
    }, [attendanceData]);

    useEffect(() => {
      if (JSON.stringify(prevClassInfo) !== JSON.stringify(currentClassInfo)) {
        setPrevClassInfo(currentClassInfo);
      }
    }, [prevClassInfo, currentClassInfo]);
    useEffect(() => {
      if (attendanceData.length && first) {
        dispatchSetCheckArr(
          Array.from(
            { length: attendanceData ? attendanceData.length : 0 },
            () => false
          )
        );
        setFirst(false);
      }
    }, [first, attendanceData]);
    useEffect(() => {
      if (!!Object.values(attendanceData).length)
        setStdStateArr(
          attendanceData.map(data =>
            Object.values(data.state).filter(state => !!state)
          )
        );
    }, [attendanceData]);

    useEffect(() => {
      dispatch(setCheckAll(false));
    }, [dispatch, clubName]);

    return (
      <S.Container>
        {clubName !== "창조실" ? (
          <S.Article>
            <S.StdCount>
              {attendanceData.length &&
                `학생수 : ${attendanceData.length}명 (${
                  attendanceData.length - employmentCount
                }명)`}
            </S.StdCount>
            <S.Name>{clubName}</S.Name>
            {clubName !== location && <S.Location>{location}</S.Location>}
            {!!clubHead && <S.Head>{`부장 : ${clubHead}`}</S.Head>}
          </S.Article>
        ) : (
          <S.Article>
            <S.StdCount>
              {attendanceData.length && `학생수 : ${attendanceData.length}명`}
            </S.StdCount>
            <S.Location location="창조실">{`창조실`}</S.Location>
          </S.Article>
        )}
        <AttendanceRowTop
          isSevenNull={isSevenNull}
          checkArrAll={checkArrAll}
          checkAll={checkAll}
        />
        <AttendanceRowContainer />
      </S.Container>
    );
  } catch (err) {
    getLocationState() === "club"
      ? (window.location.href = "/t/attendance/club")
      : (window.location.href = "/t/attendance/self-study");
    return <div></div>;
  }
};

export default React.memo(AttendanceSection);
