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
  const { schedule } = useSelector(state => state.dStats.activityByDate);
  const strManagedInfo = useSelector(state => state.dStats.managedInfo);

  const isScheduleClass = schedule !== "club" ? true : false;
  const [isClubUngranted, isClassUngranted] = Object.values(strManagedInfo).map(
    info => info.isUngranted
  );
  const nowUngranted = isScheduleClass ? isClassUngranted : isClubUngranted;
  const grantedClass = nowUngranted
    ? null
    : isScheduleClass
    ? strManagedInfo.class.data
    : strManagedInfo.club.data[0];

  const getManagedInfo = manage => {
    return {
      name: manage.name,
      floor: manage.floor,
      priority: manage.priority
    };
  };

  const { name, floor, priority } = nowUngranted
    ? { name: "", floor: "", priority: "" }
    : getManagedInfo(grantedClass);

  const floorText2apiFloorText = {
    "2층": 2,
    "3층": 3,
    "4층": 4,
    기타: 1
  };
  const [clickedFloorText] = textButtonData
    .map(data => data.isClicked && floorText2apiFloorText[data.text])
    .filter(data => data);

  const floorMap = {
    2: 0,
    3: 1,
    4: 2,
    1: 3
  };

  const currentIndexArrPriority =
    classItemData.length &&
    classItemData.filter(dataObj => dataObj.priority === priority)[0]?.priority;

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
      nowUngranted={nowUngranted}
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
