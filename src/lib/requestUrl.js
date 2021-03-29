export const ATTENDANCE = {
  ATTENDANCE_NAVIGATION_URL: (schedule, floor) => {
    return `/saturn/attendance/navigation/${schedule}/${floor}`;
  },
  CHANGE_ATTENDANCE_STATE_URL: () => {
    return `/saturn/attendance/student-state`;
  },
  ATTENDANCE_LIST_URL: (schedule, floor, priority, date) => {
    return !!date
      ? `/saturn/attendance/student-state/${schedule}/${floor}/${priority}?date=${date}`
      : `/saturn/attendance/student-state/${schedule}/${floor}/${priority}`;
  },
  RECORD_BY_GRADE_URL: grade => {
    return `/saturn/attendance/record/${grade}`;
  },
  ACTIVITY_BY_DATE_URL: date => {
    return `/saturn/attendance/activity/${date}`;
  },
  SET_ATTENCANE_MEMO: () => {
    return `/saturn/attendance/student-memo`;
  },
  SEARCH_STUDENT_BY_STATE: (schedule, state) => {
    const scheduleMap = {
      교실자습: "self-study",
      전공동아리: "club"
    };
    const stateMap = {
      외출: "outing"
    };
    return `/saturn/attendance/student?schedule=${scheduleMap[schedule]}&state=${stateMap[state]}`;
  },
  MEMO_FLOOR_DATA: floor => {
    return `/saturn/attendance/memo/${floor}`;
  },
  MODIFY_STUDENTS_DATA: () => {
    return `/saturn/attendance/student`;
  }
};

export const AUTO_COMPLETE = {
  AUTO_COMPLETE_STUDENT_URL: text => {
    return `/mars/student/autocomplete/${text}`;
  }
};

export const PRE_REPORT = {
  PRE_REPORT_LIST_URL: date => {
    return `/mars/pre-absence/date/${date}`;
  },
  CREATE_PRE_REPORT_URL: () => {
    return `/mars/pre-absence`;
  },
  PUT_PRE_REPORT_URL: id => {
    return `/mars/pre-absence/${id}`;
  },
  DELETE_PRE_REPORT_URL: id => {
    return `/mars/pre-absence/${id}`;
  },
  GET_ALL_PRE_REPORT_URL: () => {
    return "/mars/pre-absence";
  }
};

export const WORKING_TEACHER = {
  REMAINING_DATE_URL: () => {
    return `/mars/working-teacher/user/remaining-date`;
  }
};

export const NOTICE_LIST = {
  NOTICE_LIST_URL: () => {
    return `/saturn/main/notice`;
  }
};

export const AUTH = {
  SIGN_UP_URL: () => {
    return `/saturn/auth/join`;
  },
  PW_CHANGE_URL: () => {
    return `/saturn/auth/password`;
  },
  AUTHENTICATE_URL: () => {
    return `/saturn/auth/authentication-number`;
  }
};
