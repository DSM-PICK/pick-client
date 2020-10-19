export const getLocationState = () => {
  const locationPath = location.pathname.split("/")[2];
  console.log(location);
  console.log(locationPath);
  return locationPath === "class"
    ? "self-study"
    : locationPath === "club"
    ? "club"
    : function () {
        // console.log("none")
      };
};

export const makeMonth2Digit = month => {
  return month < 10 ? "0" + month : month;
};

export const makeMonth1Digit = month => {
  return Number(month) < 10 && month.length === 2 ? month[1] : month;
};

export const getNFloorToN = text => {
  return !isNaN(text[0]) ? Number(text[0]) : 1;
};

export const getFloorNToN = text => {
  return !isNaN(text[text.length - 1]) ? Number(text[text.length - 1]) : 1;
};

export const getPreAbsenceText = (
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

    let returnStrF = `${makeMonth1Digit(
      s_month
    )}월 ${s_day}일 ${start_period}교시 ~ `;
    let returnStrS = "";

    if (s_month !== e_month || s_day !== e_day) {
      returnStrS += `${makeMonth1Digit(e_month)}월 ${e_day}일`;
    }

    returnStrS += ` ${end_period}교시`;

    return [returnStrF, returnStrS];
  } else {
    return `something wrong`;
  }
};
