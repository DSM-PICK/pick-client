import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getClubLocation } from "../../../../module/action/club";
import * as S from "./styles";

const LocationView = ({ onClick }) => {
  const dispatch = useDispatch();
  const location = useSelector(store => store.club.location);
  return location.length ? (
    <S.Container>
      {location.map(({ location }) => (
        <S.Item
          onClick={() => {
            onClick(location);
            dispatch(getClubLocation([]));
          }}
        >
          {location}
        </S.Item>
      ))}
    </S.Container>
  ) : (
    ""
  );
};

export default LocationView;
