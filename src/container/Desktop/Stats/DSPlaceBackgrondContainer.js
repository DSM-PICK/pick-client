import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StatsPlaceBackground from "../../../component/Desktop/Molecules/Stats/StatsPlace/StatsPlaceBackground/StatsPlaceBackground";
import { DStatsActionCreater } from "../../../module/action/d_stats";

const DSPlaceBackgrondContainer = () => {
  const {
    clickedFloor: textButtonData,
    clickedPriority: classItemData
  } = useSelector(state => state.dStats);
  const floorText2apiFloorText = {
    "2층": 2,
    "3층": 3,
    "4층": 4,
    기타: 1
  };
  const [clickedFloorText] = textButtonData
    .map(data => data.isClicked && floorText2apiFloorText[data.text])
    .filter(data => data);

  const dispatch = useDispatch();
  const {
    setSClickedFloor,
    setSClickedPriority,
    getSClickedPrioritySaga
  } = DStatsActionCreater;

  const setSClickedFloorDispatch = useCallback(
    floorObj => {
      dispatch(setSClickedFloor({ clickedFloor: floorObj }));
    },
    [dispatch]
  );
  const setSClickedPriorityDispatch = useCallback(
    priorityObj => {
      dispatch(setSClickedPriority({ clickedPriority: priorityObj }));
    },
    [dispatch]
  );
  const getSClickedPriorityDispatch = useCallback(
    (schedule, floor) => {
      const TEMP_SCHEDULE = "self-study";
      dispatch(
        getSClickedPrioritySaga({ schedule: TEMP_SCHEDULE, floor: floor })
      );
    },
    [dispatch]
  );

  const changeisClickedByClick = useCallback((dataIndex, objArr, func) => {
    func(
      objArr.map((data, mapIndex) =>
        mapIndex !== dataIndex
          ? { ...data, isClicked: false }
          : { ...data, isClicked: true }
      )
    );
  }, []);
  const onTextButtonClick = useCallback(
    dataIndex => {
      changeisClickedByClick(
        dataIndex,
        textButtonData,
        setSClickedFloorDispatch
      );
    },
    [textButtonData]
  );
  const onClassItemClick = useCallback(
    dataIndex => {
      changeisClickedByClick(
        dataIndex,
        classItemData,
        setSClickedPriorityDispatch
      );
    },
    [classItemData]
  );

  useEffect(() => {
    getSClickedPriorityDispatch("self-study", clickedFloorText);
  }, [clickedFloorText]);

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
