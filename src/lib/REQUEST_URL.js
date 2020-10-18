export const ATTENDANCE = {
  ATTENDANCE_NAVIGATION_URL: floor => {
    return `/saturn/attendance/navigation/${floor}`;
  },
  CHANGE_ATTENDANCE_STATE_URL: () => {
    return `/saturn/attendance/student-state`;
  },
  ATTENDANCE_LIST_URL: (floor, priority) => {
    return `/saturn/attendance/student-state/${floor}/${priority}`;
  }
};

export const AUTO_COMPLETE = {
  AUTO_COMPLETE_STUDENT_URL: text => {
    return `/mars/student/autocomplete/${text}`;
  }
};

export const PRE_ABSENCE = {
  PRE_ABSENCE_LIST_URL: date => {
    return `/mars/pre-absence/date/${date}`;
  },
  CREATE_PRE_ABSENCE_URL: () => {
    return `/mars/pre-absence`;
  },
  DELETE_PRE_ABSENCE_URL: id => {
    return `/mars/pre-absence/${id}`;
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
