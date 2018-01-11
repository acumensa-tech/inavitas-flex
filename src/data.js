const data = require("../flexMock.json");
let dashData, userInstantData, currentUserUnit, subUnits, currentUser;
const users = data.User;
function populateData(index) {
  currentUser = data.User[index];
  const currentUserID = currentUser.UserID;
  const RemotePoints = data.RemotePoint;
  const allUserPermission = data.UnitPermission;
  const tags = data.Tag;
  function getkWTagID() {
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].MeasurementUnit === "kW") {
        return tags[i].TagID;
      }
    }
  }
  const tagIDOfkW = getkWTagID();
  function getCurrentUserUnitID() {
    for (let i = 0; allUserPermission.length; i++) {
      if (allUserPermission[i].UserID === currentUserID) {
        return allUserPermission[i].UnitID;
      }
    }
  }
  const currentUserUnitID = getCurrentUserUnitID();
  const units = data.Unit;
  function getCurrentUserUnit() {
    for (let i = 0; units.length; i++) {
      if (units[i].UnitID === currentUserUnitID) {
        return units[i];
      }
    }
  }
  currentUserUnit = getCurrentUserUnit();
  subUnits = [];
  function getSubUnits(UnitID) {
    for (let i = 0; i < units.length; i++) {
      if (units[i].ParentID === UnitID) {
        subUnits.push(units[i]);
        getSubUnits(units[i].UnitID);
      }
    }
  }
  function addNumSubUnits() {
    for (let i = 0; i < subUnits.length; i++) {
      let id = subUnits[i].UnitID;
      let c = 0;
      for (let j = 0; j < subUnits.length; j++) {
        if (subUnits[j].ParentID === id) {
          c++;
        }
      }
      subUnits[i]["SubUnits"] = c;
    }
  }
  getSubUnits(currentUserUnitID);
  let currentUserUnitRemotePoint;
  addNumSubUnits();
  function getUserRemotePoints() {
    let list = [];
    for (let i = 0; i < RemotePoints.length; i++) {
      if (
        RemotePoints[i].UnitID === currentUserUnitID &&
        RemotePoints[i].TagID == tagIDOfkW
      ) {
        list.push(RemotePoints[i].PointID);
      }
      for (let j = 0; j < subUnits.length; j++) {
        if (
          RemotePoints[i].UnitID === subUnits[j].UnitID &&
          RemotePoints[i].TagID == tagIDOfkW
        ) {
          list.push(RemotePoints[i].PointID);
          subUnits[j]["RemotePoint"] = RemotePoints[i].PointID;
        }
      }
    }
    return list;
  }
  const userUnitPointList = getUserRemotePoints();
  const instantData = data.InstantData;
  function getUserData() {
    let userData = [];
    if (userUnitPointList.length === 0) return 0;
    for (let j = 0; j < instantData.length; j++) {
      if (userUnitPointList.find(x => x === instantData[j].PointID)) {
        userData.push(instantData[j]);
      }
    }
    return userData;
  }
  const userData = getUserData();
  function getUserInstantData() {
    let currentTime = new Date();
    let tempDate = new Date();
    tempDate.setFullYear(parseInt(userData[0].UpdatedAt.substring(0, 4)));
    tempDate.setMonth(parseInt(userData[0].UpdatedAt.substring(5, 7)) - 1);
    tempDate.setDate(parseInt(userData[0].UpdatedAt.substring(8, 10)));
    tempDate.setHours(parseInt(userData[0].UpdatedAt.substring(11, 13)));
    tempDate.setMinutes(parseInt(userData[0].UpdatedAt.substring(14)));
    tempDate.setSeconds(0);
    tempDate.setMilliseconds(0);
    let min = 100000000000000000000000;
    let sum = 0;
    let latestAvailTime = new Date();
    userData.find(x => {
      let xDate = new Date();
      xDate.setFullYear(parseInt(x.UpdatedAt.substring(0, 4)));
      xDate.setMonth(parseInt(x.UpdatedAt.substring(5, 7)) - 1);
      xDate.setDate(parseInt(x.UpdatedAt.substring(8, 10)));
      xDate.setHours(parseInt(x.UpdatedAt.substring(11, 13)));
      xDate.setMinutes(parseInt(x.UpdatedAt.substring(14)));
      xDate.setSeconds(0);
      xDate.setMilliseconds(0);
      let diff = currentTime.getTime() - xDate.getTime();
      if (diff < min) {
        min = diff;
        latestAvailTime = xDate;
      }
    });
    userData.find(x => {
      let xDate = new Date();
      xDate.setFullYear(parseInt(x.UpdatedAt.substring(0, 4)));
      xDate.setMonth(parseInt(x.UpdatedAt.substring(5, 7)) - 1);
      xDate.setDate(parseInt(x.UpdatedAt.substring(8, 10)));
      xDate.setHours(parseInt(x.UpdatedAt.substring(11, 13)));
      xDate.setMinutes(parseInt(x.UpdatedAt.substring(14)));
      xDate.setSeconds(0);
      xDate.setMilliseconds(0);
      if (latestAvailTime.getTime() === xDate.getTime()) {
        sum += x.Value;
      }
    });
    return sum;
  }
  userInstantData = getUserInstantData();
  const intervalData = data.IntervalData;
  function getWeek(d) {
    var target = new Date(d.valueOf());
    var dayNr = (d.getDay() + 6) % 7;
    target.setDate(target.getDate() - dayNr + 3);
    var jan4 = new Date(target.getFullYear(), 0, 4);
    var dayDiff = (target - jan4) / 86400000;
    var weekNr = 1 + Math.ceil(dayDiff / 7);

    return weekNr;
  }
  function getConsumptionThisWeek() {
    let today = new Date();
    let sum = 0;
    let createDate = new Date();
    for (let i = 0; i < intervalData.length; i++) {
      createDate.setFullYear(
        parseInt(intervalData[i].CreatedAt.substring(0, 4))
      );
      createDate.setMonth(
        parseInt(intervalData[i].CreatedAt.substring(5, 7)) - 1
      );
      createDate.setDate(parseInt(intervalData[i].CreatedAt.substring(8, 10)));
      createDate.setHours(
        parseInt(intervalData[i].CreatedAt.substring(11, 13))
      );
      createDate.setMinutes(parseInt(intervalData[i].CreatedAt.substring(14)));
      createDate.setSeconds(0);
      createDate.setMilliseconds(0);
      if (
        userUnitPointList.find(x => x === intervalData[i].PointID) &&
        getWeek(createDate) == getWeek(today)
      ) {
        sum += intervalData[i].Value;
      }
    }
    return sum;
  }
  function getConsumptionThisDay() {
    let today = new Date();
    let sum = 0;
    let createDate = new Date();
    for (let i = 0; i < intervalData.length; i++) {
      createDate.setFullYear(
        parseInt(intervalData[i].CreatedAt.substring(0, 4))
      );
      createDate.setMonth(
        parseInt(intervalData[i].CreatedAt.substring(5, 7)) - 1
      );
      createDate.setDate(parseInt(intervalData[i].CreatedAt.substring(8, 10)));
      createDate.setHours(
        parseInt(intervalData[i].CreatedAt.substring(11, 13))
      );
      createDate.setMinutes(parseInt(intervalData[i].CreatedAt.substring(14)));
      createDate.setSeconds(0);
      createDate.setMilliseconds(0);
      if (
        userUnitPointList.find(x => x === intervalData[i].PointID) &&
        createDate.getDate() == today.getDate()
      ) {
        sum += intervalData[i].Value;
      }
    }
    return sum;
  }
  function getConsumptionThisYear() {
    let today = new Date();
    let sum = 0;
    let createDate = new Date();
    for (let i = 0; i < intervalData.length; i++) {
      createDate.setFullYear(
        parseInt(intervalData[i].CreatedAt.substring(0, 4))
      );
      createDate.setMonth(
        parseInt(intervalData[i].CreatedAt.substring(5, 7)) - 1
      );
      createDate.setDate(parseInt(intervalData[i].CreatedAt.substring(8, 10)));
      createDate.setHours(
        parseInt(intervalData[i].CreatedAt.substring(11, 13))
      );
      createDate.setMinutes(parseInt(intervalData[i].CreatedAt.substring(14)));
      createDate.setSeconds(0);
      createDate.setMilliseconds(0);
      if (
        userUnitPointList.find(x => x === intervalData[i].PointID) &&
        createDate.getMonth() == today.getMonth()
      ) {
        sum += intervalData[i].Value;
      }
    }
    return sum;
  }
  function getConsumptionThisMonth() {
    let today = new Date();
    let sum = 0;
    let createDate = new Date();
    for (let i = 0; i < intervalData.length; i++) {
      createDate.setFullYear(
        parseInt(intervalData[i].CreatedAt.substring(0, 4))
      );
      createDate.setMonth(
        parseInt(intervalData[i].CreatedAt.substring(5, 7)) - 1
      );
      createDate.setDate(parseInt(intervalData[i].CreatedAt.substring(8, 10)));
      createDate.setHours(
        parseInt(intervalData[i].CreatedAt.substring(11, 13))
      );
      createDate.setMinutes(parseInt(intervalData[i].CreatedAt.substring(14)));
      createDate.setSeconds(0);
      createDate.setMilliseconds(0);
      if (
        userUnitPointList.find(x => x === intervalData[i].PointID) &&
        createDate.getFullYear() == today.getFullYear()
      ) {
        sum += intervalData[i].Value;
      }
    }
    return sum;
  }
  dashData = {
    day: getConsumptionThisDay(),
    month: getConsumptionThisMonth(),
    year: getConsumptionThisYear(),
    week: getConsumptionThisWeek()
  };
}
export {
  users,
  dashData,
  userInstantData,
  currentUserUnit,
  subUnits,
  currentUser,
  populateData
};
