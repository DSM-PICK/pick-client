import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getPreAbsenceText } from "../../../../lib/attendanceApi";
import DeleteModal from "../../Modal/DeleteModal";
import * as S from "./styles";

const PreReportShow = () => {
  const preAbsenceList = useSelector(state => state.preAbsence.preAbsenceList);

  const [delModal, setDelModal] = useState(false);
  const [curAbsenceId, setCurAbsenceId] = useState("");

  const onOffDelModal = () => {
    setDelModal(!delModal);
  };

  const onShowBodyBoxClick = id => {
    setDelModal(true);
    setCurAbsenceId(id);
  };

  return (
    <S.Container>
      <S.ShowHeader>
        <S.ShowHeaderStd>학생</S.ShowHeaderStd>
        <S.ShowHeaderKind>종류</S.ShowHeaderKind>
        <S.ShowHeaderDate>기간</S.ShowHeaderDate>
      </S.ShowHeader>
      <S.ShowBody>
        {!!preAbsenceList.length ? (
          preAbsenceList.map(preAbsenceData => (
            <S.ShowBodyBox
              key={preAbsenceData.id}
              onClick={() => onShowBodyBoxClick(preAbsenceData.id)}
            >
              <S.ShowBodyStd>
                {`${preAbsenceData.stdnum} ${preAbsenceData.name}`}
              </S.ShowBodyStd>
              <S.ShowBodyKind>{preAbsenceData.state}</S.ShowBodyKind>
              <S.ShowBodyDate>
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
          ))
        ) : (
          <S.ShowBodyNoneItemText>
            사전 결석 신고 명단이 없습니다.
          </S.ShowBodyNoneItemText>
        )}
      </S.ShowBody>
      {delModal && (
        <DeleteModal
          curAbsenceId={curAbsenceId}
          onOffDelModal={onOffDelModal}
          preAbsenceList={preAbsenceList}
          setCurAbsenceId={setCurAbsenceId}
        />
      )}
    </S.Container>
  );
};

export default PreReportShow;
