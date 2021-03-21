import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import AttendanceRowTop from "./AttendanceRowTop/AttendanceRowTop";
import AttendanceRow from "./AttendanceRow/AttendanceRow";
import { useSelector } from "react-redux";
import { getLocationState } from "../../../../lib/attendanceApi";

const AttendanceSection = props => {
  try {
    const { location, name: clubName } = props.locations;

    const { currentClassInfo } = useSelector(state => state.attendance);
    const information = useSelector(state => state.attendance);
    const { clubHead, attendanceData } = information;
    const [stdStateArr, setStdStateArr] = useState(
      !!Object.values(information.attendanceData).length
        ? information.attendanceData.map(data =>
            Object.values(data.state).filter(state => !!state)
          )
        : []
    );
    const [checkArr, setCheckArr] = useState(
      Array.from(
        { length: attendanceData ? attendanceData.length : 0 },
        () => false
      )
    );
    const [checkAllState, setCheckAllState] = useState(false);
    const [first, setFirst] = useState(true);

    const isSevenNull =
      attendanceData.length && attendanceData[0].state.seven === null;
    const stateData =
      attendanceData.length && attendanceData.map(data => data.state);
    const employmentCount =
      stateData && stateData.filter(state => state.eight === "취업").length;

    const checkArrAll = useCallback(() => {
      setCheckArr(
        Array.from(
          { length: attendanceData ? attendanceData.length : 0 },
          () => !checkAllState
        )
      );
    }, [checkAllState, attendanceData]);
    const handleCheckArr = useCallback(
      index => {
        setCheckArr(
          checkArr.map((check, mapIndex) =>
            mapIndex === index ? !check : check
          )
        );
      },
      [checkArr]
    );

    useEffect(() => {
      if (attendanceData.length && first) {
        setCheckArr(
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
      setCheckAllState(
        checkArr.every(check => check === checkArr[0]) ? checkArr[0] : false
      );
    }, [checkArr]);

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
          checkAllState={checkAllState}
        />
        <S.Attendance>
          {attendanceData.length === stdStateArr.length &&
            stdStateArr.length &&
            attendanceData.map((attendance, index) => (
              <AttendanceRow
                key={attendance.gradeClassNumber}
                index={index}
                attendance={attendance}
                stdState={stdStateArr[index]}
                stdStateArr={stdStateArr}
                setStdStateArr={setStdStateArr}
                checkArr={checkArr}
                handleCheckArr={handleCheckArr}
                attendanceData={attendanceData}
              />
            ))}
        </S.Attendance>
      </S.Container>
    );
  } catch (err) {
    getLocationState() === "club"
      ? (window.location.href = "/t/attendance/club")
      : (window.location.href = "/t/attendance/self-study");
    return <div></div>;
  }
};

export default AttendanceSection;
