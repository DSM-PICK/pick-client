import React, { useCallback, useState } from "react";
import StatsPlaceBackground from "../../../component/Desktop/Molecules/Stats/StatsPlace/StatsPlaceBackground/StatsPlaceBackground";

const DSPlaceBackgrondContainer = () => {
  const [textButtonData, setTextButtonData] = useState([
    { text: "4층", isClicked: true },
    { text: "3층" },
    { text: "2층" },
    { text: "기타" }
  ]);

  const onTextButtonClick = useCallback(
    dataIndex => {
      setTextButtonData(
        textButtonData.map((data, mapIndex) =>
          mapIndex !== dataIndex
            ? { ...data, isClicked: false }
            : { ...data, isClicked: true }
        )
      );
    },
    [textButtonData]
  );

  return (
    <StatsPlaceBackground
      textButtonData={textButtonData}
      onTextButtonClick={onTextButtonClick}
    />
  );
};

export default DSPlaceBackgrondContainer;
