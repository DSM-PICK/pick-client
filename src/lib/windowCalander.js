function getWindowCalander(settingYear, settingMonth) {
  var dateObj = new Date();
  var getYear = function () {
    return dateObj.getFullYear();
  };
  var getMonth = function () {
    return dateObj.getMonth() + 1;
  };
  var getDate = function () {
    return dateObj.getDate();
  };
  var getDay = function () {
    return dateObj.getDay();
  };
  var setDate = function (date) {
    dateObj.setDate(date);
  };
  var nextDate = function () {
    dateObj.setDate(getDate() + 1);
  };
  var prevDate = function () {
    dateObj.setDate(getDate() - 1);
  };
  dateObj.setMonth(settingMonth - 1);
  dateObj.setFullYear(settingYear);
  setDate(1);
  var dayIndex = getDay();
  for (var i = 0; i < dayIndex; i++) {
    prevDate();
  }
  var calanderLineArr = [];
  for (var i = 0; i < 6; i++) {
    var dateArr = [];
    for (var j = 0; j < 7; j++) {
      var year = getYear();
      var month = getMonth();
      var nowDate = getDate();
      var dayIndex_1 = getDay();
      dateArr.push({
        year: year,
        month: month,
        date: nowDate,
        day: dayIndex_1,
        isThisMonth: month === settingMonth
      });
      nextDate();
    }
    calanderLineArr.push(dateArr);
  }
  return calanderLineArr;
}

module.exports = getWindowCalander;
