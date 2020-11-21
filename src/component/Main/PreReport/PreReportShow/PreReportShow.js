import React, { useCallback } from "react";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getPreAbsenceText } from "../../../../lib/attendanceApi";
import { showModal } from "../../../../module/action/modal_wrap";
import DeleteModal from "../../../Modal/DeleteModal/DeleteModal";
import { setSelectedPreAbsenceId } from "../../../../module/action/pre_absence";

const PreReportShow = () => {
  const preAbsenceList = useSelector(state => state.preReport.preAbsenceList);

  const dispatch = useDispatch();
  const ShowDeleteModal = useCallback(() => {
    dispatch(showModal(DeleteModal));
  }, [dispatch]);
  const SelectPreAbsenceId = useCallback(
    id => {
      dispatch(setSelectedPreAbsenceId(id));
    },
    [dispatch]
  );

  const onShowBodyBoxClick = id => {
    ShowDeleteModal();
    SelectPreAbsenceId(id);
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
                  <S.ShowBodyTextItem key={text}>{text}</S.ShowBodyTextItem>
                ))}
              </S.ShowBodyDate>
            </S.ShowBodyBox>
          ))
        ) : (
          <S.ShowBodyNoneItemText>
            사전 신고 명단이 없습니다.
          </S.ShowBodyNoneItemText>
        )}
      </S.ShowBody>
    </S.Container>
  );
};

export default PreReportShow;
