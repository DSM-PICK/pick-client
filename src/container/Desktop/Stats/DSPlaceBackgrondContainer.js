import React, { useCallback, useState } from "react";
import StatsPlaceBackground from "../../../component/Desktop/Molecules/Stats/StatsPlace/StatsPlaceBackground/StatsPlaceBackground";

const DSPlaceBackgrondContainer = () => {
  const [textButtonData, setTextButtonData] = useState([
    { text: "4층", isClicked: true },
    { text: "3층" },
    { text: "2층" },
    { text: "기타" }
  ]);
  const [classItemData, setclassItemData] = useState([
    { text: "교실 2-1", isClicked: true },
    { text: "세미나실 2-1" },
    { text: "소프트웨어 개발 1실" },
    { text: "소프트웨어 개발 2실" },
    { text: "소프트웨어 개발 3실" },
    { text: "교실 2-2" },
    { text: "교실 2-3" },
    { text: "교실 2-4" }
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
  const onClassItemClick = useCallback(
    dataIndex => {
      setclassItemData(
        classItemData.map((data, mapIndex) =>
          mapIndex !== dataIndex
            ? { ...data, isClicked: false }
            : { ...data, isClicked: true }
        )
      );
    },
    [classItemData]
  );

  return (
    <StatsPlaceBackground
      textButtonData={textButtonData}
      classItemData={classItemData}
      onTextButtonClick={onTextButtonClick}
      onClassItemClick={onClassItemClick}
    />
  );
};

export default DSPlaceBackgrondContainer;
