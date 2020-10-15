export const getLocationState = () => {
  const locationPath = location.pathname.split("/")[2];
  return locationPath === "class"
    ? "class"
    : locationPath === "club"
    ? "club"
    : function () {
        // console.log("none");
      };
};

export const makeMonth2Digit = month => {
  return month < 10 ? "0" + month : month;
};

export const makeMonth1Digit = month => {
  return Number(month) < 10 && month.length === 2 ? month[1] : month;
};
