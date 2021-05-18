import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { searchIcon } from "../../../asset";
import ClubList from "../../default/ClubList/ClubList";
import ClubListModal from "../../default/Modal/ClubListModal";
import { getClubFilter } from "../../../lib/api/search";
import * as S from "./styles";

const AdminClubList = () => {
  const data = useSelector(state => state.club.list);
  const [clubNames, setClubnames] = useState([]);

  const changeKeyword = useCallback(async e => {
    if (!e.target.value) return;
    const res = await getClubFilter(e.target.value);
    setClubnames(res.data.map(({ club_name }) => club_name));
  }, []);

  const filterData = useMemo(() => {
    if (!clubNames.length) return data;
    return data.filter(({ name }) => clubNames.includes(name));
  }, [clubNames, data]);

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          동아리 목록
          <S.SearchButtonWrap>
            <img src={searchIcon} />
            <S.SearchInput onChange={changeKeyword} placeholder="학생 이름" />
          </S.SearchButtonWrap>
        </S.Title>
      </S.Header>
      <S.Body>
        <ClubList data={filterData} />
      </S.Body>
      <ClubListModal />
    </S.Container>
  );
};

export default AdminClubList;
