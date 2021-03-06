import styled, { css } from "styled-components";

const pxToRem = px => {
  return px / 16;
};

const computerScale = 1440 / 1980;

export const DesktopReport = styled.div`
  width: 100%;
  min-width: ${pxToRem(360 * computerScale) + pxToRem(1280 * computerScale)}rem;
  display: flex;
  justify-content: center;
  padding: ${pxToRem(60)}rem;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: #f2f2f2;
  display: flex;
  > div {
    margin: 0px 9px;
  }
`;

export const DesktopReportContent = styled.div`
  background-color: white;
  box-shadow: 0px 1px 1px rgba(144, 144, 144, 0.2);
  border-radius: 12px;
`;

export const DesktopReportContentT = styled(DesktopReportContent)`
  padding: 15px;
  box-sizing: border-box;
  background-color: white;
`;

export const DesktopReportCalender = styled(DesktopReportContent)`
  width: ${pxToRem(300 * computerScale)}rem;
  height: ${pxToRem(790)}rem;
  overflow: hidden;
  box-shadow: 0px 0px 0px white;
`;

export const Form = styled(DesktopReportContent)`
  width: ${pxToRem(900)}rem;
  height: ${pxToRem(332)}rem;
  padding: ${pxToRem(16)}rem ${pxToRem(26)}rem;
  box-sizing: border-box;
`;

export const List = styled(DesktopReportContent)`
  width: ${pxToRem(900)}rem;
  height: ${pxToRem(500)}rem;
  padding: ${pxToRem(16)}rem 0px;
  box-sizing: border-box;
  margin-top: 7px;
`;

export const Calender = styled.div`
  width: 100%;
`;

export const CalenderDayWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CalenderDay = styled.div`
  font-size: ${pxToRem(12)}rem;
  width: ${pxToRem(18)}rem;
  height: ${pxToRem(18)}rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: ${pxToRem(9)}rem ${pxToRem(16 * computerScale)}rem;
  cursor: pointer;
  ${({ isToday, isClicked }) =>
    isToday
      ? css`
          background-color: #406cff;
          color: white;
        `
      : isClicked
      ? css`
          background-color: rgba(64, 108, 255, 0.2);
          color: #406cff;
        `
      : css`
          background-color: white;
          color: black;
        `}
  > p {
    transform: translate(0px, 1px);
  }
`;

export const CalenderMonth = styled.div`
  font-size: ${pxToRem(14)}rem;
  margin-left: ${pxToRem(15)}rem;
  margin-top: ${pxToRem(20)}rem;
  ${props =>
    props.isTodayMonth
      ? css`
          color: #406cff;
        `
      : css`
          color: black;
        `};
`;

export const CalenderToday = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${pxToRem(10)}rem;
  > p {
    font-size: ${pxToRem(14)}rem;
  }
`;

export const CalenderButton = styled.button`
  width: ${pxToRem(60)}rem;
  height: ${pxToRem(20)}rem;
  cursor: pointer;
  background-color: #f2f2f2;
  border-radius: 6px;
  box-shadow: 0px 1px 1px 0px rgba(144, 144, 144, 0.2);
  font-size: ${pxToRem(13)}rem;
  outline: none;
  border: none;
`;

export const CalenderDayOfWeek = styled(CalenderDay)``;

export const CalenderDayOfWeekWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CalenderBlankDay = styled(CalenderDay)`
  width: 14px;
`;

export const CalenderWrapper = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
`;

export const FormWrapper = styled.div`
  transform: translate(0px, -20px);
`;

export const FormTitle = styled.p`
  font-size: ${pxToRem(16)}rem;
  margin-bottom: 4px;
  font-weight: 600;
`;

export const FormColumn = styled.div`
  margin-bottom: 25px;
  display: flex;
  align-items: center;
`;

export const FormStudent = styled(FormColumn)`
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const FormText = styled.p`
  font-size: ${pxToRem(16)}rem;
  width: 60px;
  margin-top: 2px;
  font-weight: 600;
  margin-right: 15px;
`;

export const FormStudentWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  height: 68px;
`;

export const FormStudentItem = styled.div`
  position: relative;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-bottom: 14px;
  > div.selected {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #406cff;
    position: absolute;
    left: 50%;
    transform: translate(-100%, -5px);
    ${({ isActive }) =>
      isActive
        ? css`
            display: block;
          `
        : css`
            display: none;
          `};
  }
  &:hover > div {
    font-weight: 600;
  }
  > div {
    width: ${pxToRem(90)}rem;
    height: ${pxToRem(24)}rem;
    border-radius: 6px;
    margin: 0px ${pxToRem(3)}rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    transition: all 0.3s;
    cursor: pointer;
    ${props =>
      props.isActive
        ? css`
            font-weight: 600;
          `
        : css`
            font-weight: 300;
          `}
  }
  &:hover > .delete {
    display: block;
    opacity: 1;
    z-index: 10;
  }
  > .delete {
    width: 100%;
    transition: opacity 0.3s;
    color: #ff406e;
    font-size: 14px;
    position: absolute;
    margin-top: 0px;
    text-align: center;
    display: none;
    opacity: 0;
    cursor: pointer;
  }
`;

export const FormStudentAddInput = styled.div`
  width: ${pxToRem(84)}rem;
  height: ${pxToRem(24)}rem;
  border-radius: 6px;
  margin: 0px ${pxToRem(3)}rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  transition: all 0.3s;
  cursor: pointer;
  border: 1px solid #707070;
  background-color: white;
  position: relative;
  > textarea {
    color: #707070;
    outline: none;
    resize: none;
    font-size: 16px;
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    box-sizing: border-box;
    text-align: center;
  }
  > div {
    top: ${pxToRem(25)}rem;
    left: 0px;
    position: absolute;
    width: ${pxToRem(84)}rem;
    max-height: 120px;
    overflow-y: scroll;
    border: 1px solid #707070;
    background-color: white;
    > div {
      font-size: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      z-index: 1;
      padding: 2px 0px;
    }
    > div:hover {
      background-color: #eeeeee;
    }
  }
`;

export const FormStudentAddItemButton = styled(FormStudentItem)`
  > div {
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #707070;
    &::before {
      content: "";
      display: block;
      width: 1px;
      height: 10px;
      border-radius: 10px;
      background-color: #707070;
    }
    &::after {
      content: "";
      display: block;
      background-color: #707070;
      width: 1px;
      border-radius: 10px;
      height: 10px;
      transform: translate(-1px) rotate(90deg);
    }
  }
`;

export const FormDate = styled(FormColumn)`
  display: flex;
`;

export const FormDateInput = styled.div`
  font-size: 16px;
`;

export const FormType = styled(FormColumn)`
  display: flex;
`;

export const FormTypeButtonWrapper = styled.div`
  width: ${pxToRem(228)}rem;
  border: 1px solid #707070;
  display: flex;
  height: ${pxToRem(24)}rem;
  border-radius: 6px;
  overflow: hidden;
`;

export const FormTypeButton = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${({ isActive }) =>
    isActive
      ? css`
          color: white;
          background-color: #406cff;
        `
      : css`
          color: #707070;
          background-color: white;
        `}
`;

export const FormDescriptionInput = styled.input`
  border: none;
  border-bottom: 1px solid #707070;
  width: ${pxToRem(300)}rem;
  height: ${pxToRem(30)}rem;
  outline: none;
  padding: 3px 0px;
  font-size: 16px;
  font-weight: 400;
`;

export const FormAddButton = styled.button`
  width: ${pxToRem(344)}rem;
  height: 40px;
  background-color: #406cff;
  color: white;
  border-radius: 12px;
  font-size: 16px;
  border: none;
  outline: none;
`;

export const FormListTitle = styled(FormTitle)`
  margin-top: 30px;
`;

export const FormListContent = styled.ul`
  height: 100%;
  list-style: none;
  > .wrapper {
    overflow-y: scroll;
    height: 97%;
  }
`;

export const FormListItem = styled.li`
  width: 100%;
  height: 23px;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  position: relative;
  &:hover > .menu {
    opacity: 1;
  }
  > div.header {
    font-weight: 600;
  }
  > div {
    justify-content: center;
    align-items: center;
    display: flex;
  }
  > .date {
    width: 40%;
  }
  > .student {
    width: 20%;
  }
  > .type {
    width: 5%;
  }
  > .teacher {
    width: 13%;
  }
  > .description {
    width: 20%;
  }
  > .menu {
    right: 5px;
    width: 17px;
    height: 17px;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    opacity: 0;
    position: absolute;
    transition: all 0.3s;
    &:hover {
      background-color: #c4c4c4;
    }
    > div {
      width: 3px;
      height: 3px;
      background-color: #707070;
      border-radius: 50%;
      margin: 1px;
    }
    > input[type="checkbox"] {
      display: none;
    }
    > input[type="checkbox"]:checked + div {
      display: block;
    }
  }
  &:hover {
    background-color: ${props => (props.isHeader ? "" : "#eeeeee")};
  }
`;

export const FormListItemMenu = styled.div`
  width: ${pxToRem(50)}rem !important;
  height: ${pxToRem(50)}rem !important;
  border-radius: 4px !important;
  top: 10px;
  left: -50px;
  z-index: 100;
  position: absolute !important;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2) !important;
  background-color: white !important;
  overflow: hidden;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${pxToRem(24)}rem;
    &:hover {
      background-color: #eeeeee;
    }
  }
  > div.listItemDeleteButton {
    color: #ff406e;
  }
`;

export const FormDatePeriodInput = styled.input`
  width: 20px;
  height: 16px;
  border: none;
  outline: none;
  font-size: 16px;
  text-align: center;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const FomrDatePeriodInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CalenderTWrapper = styled.div`
  background-color: white;
`;
