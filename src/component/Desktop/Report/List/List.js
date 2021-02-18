import React from "react";
import { useDesktopReportState } from "../../../../lib/hooks/desktop/report";
import * as S from "../styles";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";

const List = () => {
  const { state, setState } = useDesktopReportState();
  const { attendanceChangeList } = state;
  const {
    deleteAttendanceChangeStudent,
    setFixAttendanceChangeStudent
  } = setState;
  const getDateTextWithAttendanceChangeDateAndPeriod = (
    startDate,
    endDate,
    startPeriod,
    endPeriod
  ) => {
    return `${startDate.month}월 ${startDate.date}일 ${startPeriod}교시 ~ ${endDate.month}월 ${endDate.date}일 ${endPeriod}교시`;
  };
  const renderListItem = attendanceChangeList => {
    return attendanceChangeList.map(item => {
      const {
        id,
        name,
        number,
        description,
        type,
        teacher,
        endDate,
        endPeriod,
        startDate,
        startPeriod
      } = item;
      return (
        <ListItem
          item={item}
          type={type}
          student={`${number} ${name}`}
          description={description}
          teacher={teacher}
          id={id}
          key={`${id} ${number} ${name} ${type}`}
          deleteAttendanceChangeStudent={deleteAttendanceChangeStudent}
          setFixAttendanceChangeStudent={setFixAttendanceChangeStudent}
          date={getDateTextWithAttendanceChangeDateAndPeriod(
            startDate,
            endDate,
            startPeriod,
            endPeriod
          )}
        ></ListItem>
      );
    });
  };
  return (
    <S.FormWrapper>
      <S.FormListTitle>출석 변동사항 목록</S.FormListTitle>
      <S.List>
        <S.FormListContent>
          <ListHeader />
          <div className="wrapper">{renderListItem(attendanceChangeList)}</div>
        </S.FormListContent>
      </S.List>
    </S.FormWrapper>
  );
};

export default List;
