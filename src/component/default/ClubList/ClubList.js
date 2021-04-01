import React from "react";
import ListClubItemContainer from "../ClubItem/ListClubItemContainer";
import * as S from "./styles";
import withClubList from "./withClubList";

const ClubList = ({ data }) => {
  return (
    <>
      {data.map((clubData, rowIndex) => (
        <S.ClubRow key={rowIndex}>
          {clubData.map(({ name, location }, itemIndex) => (
            <ListClubItemContainer name={name} where={location} key={name} />
          ))}
        </S.ClubRow>
      ))}
    </>
  );
};

export default withClubList(ClubList);
