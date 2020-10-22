import React from "react";
import * as S from "./styles";
import withClubList from "./withClubList";
import MemberClubItemContainer from "../ClubItem/MemberClubItemContainer";

const MemberClubList = ({ data, step, setCircleData, setEditStep }) => {
  return (
    <>
      {data.map((clubData, rowIndex) => (
        <S.ClubRow key={rowIndex}>
          {clubData.map(({ name, location }, itemIndex) => (
            <MemberClubItemContainer
              step={step}
              name={name}
              where={location}
              setCircleData={setCircleData}
              key={String(rowIndex) + itemIndex}
              setEditStep={setEditStep}
            />
          ))}
        </S.ClubRow>
      ))}
    </>
  );
};

export default withClubList(MemberClubList);
