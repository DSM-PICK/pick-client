export const getAttendanceChangeProxy = (attendanceChangeStudentList, key) =>
  new Proxy(
    {},
    {
      get: (obj, prop) => {
        const value = attendanceChangeStudentList.filter(
          student => student.id == prop
        );
        if (value.length <= 0) {
          return "";
        }
        return value[0][key];
      }
    }
  );
