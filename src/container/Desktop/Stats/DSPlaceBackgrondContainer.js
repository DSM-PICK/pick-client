import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StatsPlaceBackground from "../../../component/Desktop/Molecules/Stats/StatsPlace/StatsPlaceBackground/StatsPlaceBackground";
import { DStatsActionCreater } from "../../../module/action/d_stats";

const DSPlaceBackgrondContainer = () => {
  const {
    clickedFloor: textButtonData,
    clickedPriority: classItemData,
    clickedPriorityArrPriority
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

  const { schedule } = useSelector(state => state.dStats.activityByDate);
  const managedClub = JSON.parse(localStorage.getItem("managedClub"));
  const managedClassroom = JSON.parse(localStorage.getItem("managedClassroom"));
  const managedInfo = schedule === "club" ? managedClub : managedClassroom;
  const { floor, priority } = managedInfo;
  const floorMap = {
    2: 0,
    3: 1,
    4: 2,
    1: 3
  };
  const currentIndexArrPriority =
    classItemData.length &&
    classItemData.filter(dataObj => dataObj.priority === priority)[0].priority;

  const dispatch = useDispatch();
  const {
    setSClickedFloor,
    setSClickedPriority,
    getSClickedPrioritySaga,
    setSClickedPriorityArrPriority
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
    (schedule, floor, setting) => {
      dispatch(
        getSClickedPrioritySaga({
          schedule: schedule,
          floor: floor,
          setting: setting
        })
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
  const onClickFastSearchBtn = useCallback(() => {
    changeisClickedByClick(
      floorMap[floor],
      textButtonData,
      setSClickedFloorDispatch
    );
    changeisClickedByClick(
      currentIndexArrPriority,
      classItemData,
      setSClickedPriorityDispatch
    );
    onCPriorityArrPriority(currentIndexArrPriority);
  }, [textButtonData, classItemData]);
  const onCPriorityArrPriority = useCallback(
    priority => {
      dispatch(
        setSClickedPriorityArrPriority({ clickedPriorityArrPriority: priority })
      );
    },
    [dispatch]
  );
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
      onCPriorityArrPriority(dataIndex);
    },
    [classItemData]
  );

  useEffect(() => {
    getSClickedPriorityDispatch(schedule, clickedFloorText);
  }, [schedule, clickedFloorText]);

  return (
    <StatsPlaceBackground
      textButtonData={textButtonData}
      classItemData={classItemData}
      clickedPriorityArrPriority={clickedPriorityArrPriority}
      onClickFastSearchBtn={onClickFastSearchBtn}
      onTextButtonClick={onTextButtonClick}
      onClassItemClick={onClassItemClick}
    />
  );
};

export default DSPlaceBackgrondContainer;
