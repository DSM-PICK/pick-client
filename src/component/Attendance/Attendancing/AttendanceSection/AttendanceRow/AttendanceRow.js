import React, { useState, useEffect } from "react";
import * as S from "./styles";
import AttendanceCell from "./AttendanceCell/AttendanceCell";

const AttendanceRow = props => {
  const { gradeClassNumber, name, sequence } = props.attendance;
  const { onChangeRow } = props;
  const { classData, index } = props;

  console.log(props);

  let sevenState = "출석";
  let eightState = "출석";
  let nineState = "출석";
  let tenState = "출석";

  const onSevenClick = value => {
    sevenState = value;
    onDataChange();
  };

  const onEightClick = value => {
    eightState = value;
    onDataChange();
  };

  const onNineClick = value => {
    nineState = value;
    onDataChange();
  };

  const onTenClick = value => {
    tenState = value;
    onDataChange();
  };

  const onDataChange = () => {
    let classDatas = classData.attendances.filter(
      attendance => attendance.sequence !== sequence
    );

    classDatas = classDatas.concat({
      gradeClassNumber: gradeClassNumber,
      name: name,
      sequence: sequence,
      state: {
        seven: sevenState,
        eight: eightState,
        nine: nineState,
        ten: tenState
      }
    });

    classDatas.sort(function (a, b) {
      return a.sequence - b.sequence;
    });

    let datas = {
      ...classData,
      attendances: [...classDatas]
    };
    onChangeRow(datas);
  };

  return (
    <S.Containter>
      <S.SectionSeq>{index + 1}</S.SectionSeq>
      <S.SectionStdNum>{gradeClassNumber}</S.SectionStdNum>
      <S.SectionName>{name}</S.SectionName>
      <S.SectionClassWrap>
        <AttendanceCell sequence={sequence} onClassClick={onSevenClick} />
        <S.SectionClass>
          <AttendanceCell sequence={sequence} onClassClick={onEightClick} />
        </S.SectionClass>
        <S.SectionClass>
          <AttendanceCell sequence={sequence} onClassClick={onNineClick} />
        </S.SectionClass>
        <S.SectionClass>
          <AttendanceCell sequence={sequence} onClassClick={onTenClick} />
        </S.SectionClass>
      </S.SectionClassWrap>
    </S.Containter>
  );
};

export default AttendanceRow;
