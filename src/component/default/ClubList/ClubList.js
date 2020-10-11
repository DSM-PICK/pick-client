import React from "react";
import ListClubItemContainer from "../ClubItem/ListClubItemContainer";
import * as S from "./styles";
import withClubList from "./withClubList";

const ClubList = ({ data }) => {
  return (
    <>
      {data.map((clubData, rowIndex) => (
        <S.ClubRow key={rowIndex}>
          {clubData.map(({ name, where, id }, itemIndex) => (
            <ListClubItemContainer
              name={name}
              wehre={where}
              id={id}
              key={String(rowIndex) + itemIndex}
            />
          ))}
        </S.ClubRow>
      ))}
    </>
  );
};

export default withClubList(ClubList);
