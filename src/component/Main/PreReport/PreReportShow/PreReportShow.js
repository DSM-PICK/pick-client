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
        <S.ShowHeaderStd>학생</S.ShowHeaderStd>
        <S.ShowHeaderKind>종류</S.ShowHeaderKind>
        <S.ShowHeaderDate>기간</S.ShowHeaderDate>
      </S.ShowHeader>
      <S.ShowBody>
        {!!preReportList.length ? (
          preReportList.map(preReportData => (
            <S.ShowBodyBox
              key={preReportData.id}
              onClick={() => onShowBodyBoxClick(preReportData.id)}
            >
              <S.ShowBodyStd>
                {`${preReportData.stdnum} ${preReportData.name}`}
              </S.ShowBodyStd>
              <S.ShowBodyKind>{preReportData.state}</S.ShowBodyKind>
              <S.ShowBodyDate>
                {getPreReportText(
                  preReportData.start_date,
                  preReportData.start_period,
                  preReportData.end_date,
                  preReportData.end_period
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
