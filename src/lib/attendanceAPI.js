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
