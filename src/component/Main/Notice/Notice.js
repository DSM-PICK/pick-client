import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNoticeListSaga } from "../../../module/action/notice";
import * as S from "./styles";

const Notice = () => {
  const clubNotice = useSelector(state => state.notice.clubList);
  const memberNotice = useSelector(state => state.notice.memberList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNoticeListSaga());
  }, []);

  return (
    <S.Container>
      <S.Section>
        <S.Header>동아리원</S.Header>
        <S.InformationWrap>
          {!!memberNotice.length &&
            memberNotice.map(data => (
              <S.Information key={data}>{data}</S.Information>
            ))}
        </S.InformationWrap>
      </S.Section>
      <S.Section>
        <S.Header>동아리</S.Header>
        <S.InformationWrap>
          {!!clubNotice.length &&
            clubNotice.map(data => (
              <S.Information key={data}>{data}</S.Information>
            ))}
        </S.InformationWrap>
      </S.Section>
    </S.Container>
  );
};

export default Notice;
