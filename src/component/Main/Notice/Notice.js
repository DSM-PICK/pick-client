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
        <S.Header>동아리</S.Header>
        <S.InformationWrap attr="club">
          {!!clubNotice.length &&
            clubNotice.map((data, index) => (
              <S.Information key={data + index}>{data}</S.Information>
            ))}
        </S.InformationWrap>
      </S.Section>
      <S.Section>
        <S.Header>동아리원</S.Header>
        <S.InformationWrap attr="member">
          {!!memberNotice.length &&
            memberNotice.map((data, index) => (
              <S.Information key={data + index}>{data}</S.Information>
            ))}
        </S.InformationWrap>
      </S.Section>
    </S.Container>
  );
};

export default Notice;
