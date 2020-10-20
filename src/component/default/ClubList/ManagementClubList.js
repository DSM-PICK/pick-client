import React from "react";
import ManagementClubItemContainer from "../ClubItem/ManagementClubItemContainer";
import withClubList from "./withClubList";
import * as S from "./styles";

const ManagementClubList = ({ data, changeSelectItem, isDeleteOn }) => {
  return (
    <>
      {data.map((clubData, rowIndex) => (
        <S.ClubRow key={rowIndex}>
          {clubData.map(({ name, location }, itemIndex) => (
            <ManagementClubItemContainer
              name={name}
              where={location}
              isDeleteOn={isDeleteOn}
              changeSelectItem={changeSelectItem}
              key={String(rowIndex) + itemIndex + name}
            />
          ))}
        </S.ClubRow>
      ))}
    </>
  );
};

export default withClubList(ManagementClubList);
