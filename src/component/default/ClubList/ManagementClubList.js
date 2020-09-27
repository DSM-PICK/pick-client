import React from "react";
import ManagementClubItemContainer from "../ClubItem/ManagementClubItemContainer";
import withClubList from "./withClubList";
import * as S from "./styles";

const ManagementClubList = ({ data, changeSelectItem, isDeleteOn }) => {
  return (
    <>
      {data.map((clubData, rowIndex) => (
        <S.ClubRow key={rowIndex}>
          {clubData.map(({ name, where, id }, itemIndex) => (
            <ManagementClubItemContainer
              name={name}
              where={where}
              id={id}
              isDeleteOn={isDeleteOn}
              changeSelectItem={changeSelectItem}
              key={String(rowIndex) + itemIndex}
            />
          ))}
        </S.ClubRow>
      ))}
    </>
  );
};

export default withClubList(ManagementClubList);
