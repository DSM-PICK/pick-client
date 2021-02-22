export const dayOfWeekEnum = {
  0: 0,
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 0
};

export const getMonthLastDay = (year, month) => {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: {
      return 31;
    }
    case 4:
    case 6:
    case 9:
    case 11: {
      return 30;
    }
    case 2: {
      if (year % 4 === 0 && year % 100 !== 0) {
        return 29;
      } else {
        return 28;
      }
    }
  }
};
