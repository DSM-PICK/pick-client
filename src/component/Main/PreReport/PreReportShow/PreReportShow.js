import React, { useState } from "react";
import { makeMonth1Digit } from "../../../../lib/attendanceAPI";
import DeleteModal from "../../Modal/DeleteModal";
import * as S from "./styles";

const getPreAbsenceText = (start_date, start_period, end_date, end_period) => {
  if (!!start_date && !!start_period && !!end_date && !!end_period) {
    const spliting_sDate = start_date.split("-");
    const spliting_eDate = end_date.split("-");
    const s_month = spliting_sDate[1];
    const s_day = spliting_sDate[2];
    const e_month = spliting_eDate[1];
    const e_day = spliting_eDate[2];

    let returnStrF = `${makeMonth1Digit(
      s_month
    )}월 ${s_day}일 ${start_period}교시 ~ `;
    let returnStrS = "";

    if (s_month !== e_month || s_day !== e_day) {
      returnStrS += `${makeMonth1Digit(e_month)}월 ${e_day}일`;
    }

    returnStrS += ` ${end_period}교시`;

    return [returnStrF, returnStrS];
  } else {
    return `something wrong`;
  }
};

const PreReportShow = props => {
  const { preAbsenceList } = props;

  const [delCheck, setDelCheck] = useState(false);
  const [delModal, setDelModal] = useState(false);
  const [curAbsenceId, setCurAbsenceId] = useState("");

  return (
    <S.Container>
      <S.ShowHeader>
        <S.ShowHeaderStd>학생</S.ShowHeaderStd>
        <S.ShowHeaderKind>종류</S.ShowHeaderKind>
        <S.ShowHeaderDate>기간</S.ShowHeaderDate>
      </S.ShowHeader>
      <S.ShowBody>
        {preAbsenceList &&
          preAbsenceList.map(preAbsenceData => (
            <S.ShowBodyBox
              key={preAbsenceData.id}
              onClick={() => setDelCheck(true)}
            >
              <S.ShowBodyStd id={preAbsenceData.id} curAbsenceId={curAbsenceId}>
                {`${preAbsenceData.stdnum} ${preAbsenceData.name}`}
              </S.ShowBodyStd>
              <S.ShowBodyKind
                id={preAbsenceData.id}
                curAbsenceId={curAbsenceId}
              >
                {preAbsenceData.state}
              </S.ShowBodyKind>
              <S.ShowBodyDate
                id={preAbsenceData.id}
                curAbsenceId={curAbsenceId}
              >
                {getPreAbsenceText(
                  preAbsenceData.start_date,
                  preAbsenceData.start_period,
                  preAbsenceData.end_date,
                  preAbsenceData.end_period
                ).map(text => (
                  <span key={text}>{text}</span>
                ))}
              </S.ShowBodyDate>
            </S.ShowBodyBox>
          ))}
      </S.ShowBody>
      {delCheck && <S.ShowCheckDelBtn>삭제</S.ShowCheckDelBtn>}
      {delModal && (
        <DeleteModal
          setDelModal={setDelModal}
          curAbsenceId={curAbsenceId}
          setCurAbsenceId={setCurAbsenceId}
        />
      )}
    </S.Container>
  );
};

export default PreReportShow;
