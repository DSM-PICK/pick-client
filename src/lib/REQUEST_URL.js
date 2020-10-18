export const ATTENDANCE = {
  GET_FLOOR_DATA_URL: floor => {
    return `/saturn/attendance/navigation/${floor}`;
  },
  GET_ATTENDANCE_STD_DATA_SAGA_URL: (floor, priority) => {
    return `/saturn/attendance/student-state/${floor}/${priority}`;
  },
  POST_ATTENDANCE_STD_DATA_URL: () => {
    return `/saturn/attendance/student-state`;
  }
};

export const AUTO_COMPLETE = {
  GET_AUTO_COMPLETE_TEXT_SAGA: text => {
    return `/mars/student/autocomplete/${text}`;
  }
};

export const PRE_ABSENCE = {
  GET_PRE_ABSENCE_LIST: date => {
    return `/mars/pre-absence/date/${date}`;
  },
  CREATE_PRE_ABSENCE_SAGA: () => {
    return `/mars/pre-absence`;
  },
  DELETE_PRE_ABSENCE: id => {
    return `/mars/pre-absence/${id}`;
  }
};

export const WORKING_TEACHER = {
  REMAINING_DATE: () => {
    return `/mars/working-teacher/user/remaining-date`;
  }
};
