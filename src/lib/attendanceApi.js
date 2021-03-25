export const getLocationState = () => {
  const locationPath = location.pathname.split("/")[3];
  return locationPath;
};

export const makeDate2Digit = month => {
  return month < 10 ? "0" + month : month;
};

export const makeDate1Digit = month => {
  return Number(month) < 10 && month.length === 2 ? month[1] : month;
};

export const getNFloorToN = text => {
  return !isNaN(text[0]) ? Number(text[0]) : 1;
};

export const getFloorNToN = text => {
  return !isNaN(text[text.length - 1]) ? Number(text[text.length - 1]) : 1;
};

export const getPreReportText = (
  start_date,
  start_period,
  end_date,
  end_period
) => {
  if (!!start_date && !!start_period && !!end_date && !!end_period) {
    const spliting_sDate = start_date.split("-");
    const spliting_eDate = end_date.split("-");
    const s_month = spliting_sDate[1];
    const s_day = spliting_sDate[2];
    const e_month = spliting_eDate[1];
    const e_day = spliting_eDate[2];

    let returnStrF = `${s_month}월 ${s_day}일 ${start_period}교시 ~`;
    let returnStrS = "";

    if (s_month !== e_month || s_day !== e_day) {
      returnStrS += `${e_month}월 ${e_day}일`;
    }

    returnStrS += ` ${end_period}교시`;

    return [returnStrF, returnStrS];
  } else {
    return `something wrong`;
  }
};

export const PreReportReg = {
  isRightState: state => {
    return ["외출", "현체", "귀가", "이동", "취업"].includes(state)
      ? true
      : false;
  },
  isRightStdNumName: stdnum => {
    const re = /\d{4}\s[가-힣]/;
    return re.test(stdnum);
  },
  isRightStdnum: stdnum => {
    const re = /\d{4}/;
    return re.test(stdnum);
  },
  isRightDate: date => {
    const re = /\d{4}-\d{2}-\d{2}/;
    return re.test(date);
  },
  isRightPeriod: period => {
    return !isNaN(period) && period >= 1 && period <= 10;
  }
};

export const checkPreReportName = stdnum => {
  if (!PreReportReg.isRightStdNumName(stdnum)) {
    alert(`이름이 올바르지 않습니다.`);
    return false;
  }
  return true;
};
export const checkPreReportData = obj => {
  const { state, stdnum, start_date, start_period, end_date, end_period } = obj;

  if (!PreReportReg.isRightState(state)) {
    alert(
      `출석 상태는 "외출", "현체", "귀가", "이동", "취업" 중 하나여야합니다.`
    );
    throw new Error(
      `State(${state}) is not in "외출", "현체", "귀가", "이동", "취업"`
    );
  }
  for (let date of [start_date, end_date]) {
    if (!PreReportReg.isRightDate(date)) {
      alert(`날짜가 올바르지 않습니다.`);
      throw new Error(`Invalid Date(${date})`);
    }
  }
  for (let period of [start_period, end_period]) {
    if (!PreReportReg.isRightPeriod(period)) {
      alert(`교시가 올바르지 않습니다.`);
      throw new Error(`Invalid Period(${period})`);
    }
  }
  if (!PreReportReg.isRightStdnum(stdnum)) {
    alert(`이름이 올바르지 않습니다.`);
    throw new Error(`Invalid stdnum(${stdnum})`);
  }
  return true;
};

export const getFloor = floorName => {
  switch (floorName) {
    case "1학년":
    case "4층": {
      return 4;
    }
    case "2학년":
    case "3층": {
      return 3;
    }
    case "3학년":
    case "2층": {
      return 2;
    }
    case "기타": {
      return 1;
    }
    default: {
      return 0;
    }
  }
};

export const getManagedInfo = (managedClassroom, managedClub) => {
  const isClubUngranted = managedClub.length === 0;
  const isClassUngranted = managedClassroom === null;

  return {
    club: {
      isUngranted: isClubUngranted,
      data: isClubUngranted ? [] : managedClub,
      floorData: []
    },
    class: {
      isUngranted: isClassUngranted,
      data: isClassUngranted ? null : managedClassroom,
      floorData: isClassUngranted ? null : []
    }
  };
};
