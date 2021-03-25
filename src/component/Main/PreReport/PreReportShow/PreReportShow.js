import React, { useCallback } from "react";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getPreReportText } from "../../../../lib/attendanceApi";
import { showModal } from "../../../../module/action/modal_wrap";
import DeleteModal from "../../../Modal/DeleteModal/DeleteModal";
import { setSelectedPreReportId } from "../../../../module/action/pre_report";

const PreReportShow = () => {
  const preReportList = useSelector(state => state.preReport.preReportList);

  const dispatch = useDispatch();
  const ShowDeleteModal = useCallback(() => {
    dispatch(showModal(DeleteModal));
  }, [dispatch]);
  const SelectPreReportId = useCallback(
    id => {
      dispatch(setSelectedPreReportId(id));
    },
    [dispatch]
  );

  const onShowBodyBoxClick = id => {
    ShowDeleteModal();
    SelectPreReportId(id);
  };

  return (
    <S.Container>
      <S.ShowHeader>
        <S.ShowHeaderItem>학번/학생</S.ShowHeaderItem>
        <S.ShowHeaderItem>출결사항</S.ShowHeaderItem>
        <S.ShowHeaderItem>날짜</S.ShowHeaderItem>
        <S.ShowHeaderItem>확인교사</S.ShowHeaderItem>
        <S.ShowHeaderItem>사유</S.ShowHeaderItem>
      </S.ShowHeader>
      <S.ShowBody>
        {!!preReportList.length ? (
          preReportList.map(preReportData => (
            <S.ShowBodyBox
              key={preReportData.id}
              onClick={() => onShowBodyBoxClick(preReportData.id)}
            >
              <S.ShowBodyBoxItem>
                {`${preReportData.stdnum} ${preReportData.name}`}
              </S.ShowBodyBoxItem>
              <S.ShowBodyBoxItem>{preReportData.state}</S.ShowBodyBoxItem>
              <S.ShowBodyBoxItem>
                {getPreReportText(
                  preReportData.start_date,
                  preReportData.start_period,
                  preReportData.end_date,
                  preReportData.end_period
                ).map(text => (
                  <S.ShowBodyTextItem key={text}>{text}</S.ShowBodyTextItem>
                ))}
              </S.ShowBodyBoxItem>
              <S.ShowBodyBoxItem>{preReportData.teacher}</S.ShowBodyBoxItem>
              <S.ShowBodyBoxItem>{preReportData.reason}</S.ShowBodyBoxItem>
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
