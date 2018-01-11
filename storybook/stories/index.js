import React from "react";
import SplashScreen from "../../src/Screens/SplashScreen";
import { storiesOf } from "@storybook/react-native";
import Header from "../../src/Components/Header";
import InstantCons from "../../src/Components/InstantConsumption";
import StatGrid from "../../src/Components/GridStats";
import StatusCurr from "../../src/Components/StatusCurr";
import Dashboard from "../../src/Screens/Dashboard";
import SubUnitFormat from "../../src/Components/SubUnitCardFormat";
import SubUnitsList from "../../src/Components/SubUnitsList";
import ChangeDuration from "../../src/Components/ChangeDurationSubUnits";
import SubUnitsScreen from "../../src/Screens/SubUnitsScreen";
import SubunitTabFormat from "../../src/Screens/SubUnitsScreen/Format";
import GraphicsBar from "../../src/Components/GraphicsBar";
import GraphicsScreen from "../../src/Screens/GraphicsScreen";
import AlarmFormat from "../../src/Components/AlarmFormat";
import Alarms from "../../src/Screens/Alarms";
const alarmData = [
  {
    name: "Overflow",
    level: "high",
    date: "01.01.2018"
  },
  {
    name: "Overflow",
    level: "medium",
    date: "01.01.2018"
  },
  {
    name: "Overflow",
    level: "low",
    date: "01.01.2018"
  }
];
const graphicsData = [
  7000,
  7500,
  6800,
  11000,
  9600,
  7100,
  8300,
  6250,
  7600,
  9600,
  7500
];
const subUnitsData = [
  {
    name: "teknosa",
    alert: false,
    totalSubUnits: 25,
    totalConsumption: "25,512"
  },
  {
    name: "boyner",
    alert: true,
    totalSubUnits: 25,
    totalConsumption: "25,512"
  },
  {
    name: "vakko",
    alert: true,
    totalSubUnits: 25,
    totalConsumption: "25,512"
  }
];
storiesOf("Common", module).add("Header", () => <Header />);
storiesOf("Dashboard", module)
  .add("InstantConsumption", () => <InstantCons />)
  .add("StatGrid", () => <StatGrid />)
  .add("StatusCurr", () => (
    <StatusCurr icon="md-checkmark" propName="System Status" status="Normal" />
  ));
storiesOf("SubUnits", module)
  .add("SubUnitFormat", () => (
    <SubUnitFormat
      item={{
        name: "teknosa",
        alert: true,
        totalSubUnits: 25,
        totalConsumption: "25,512"
      }}
    />
  ))
  .add("SubUnitsList", () => <SubUnitsList data={subUnitsData} />)
  .add("ChangeDuration", () => (
    <ChangeDuration
      onLeftPress={() => {}}
      currentPd="01 January 2018"
      onRightPress={() => {}}
    />
  ))
  .add("SubunitTabFormat", () => (
    <SubunitTabFormat
      onLeftPress={() => {}}
      pd="01 January 2018"
      onRightPress={() => {}}
      data={subUnitsData}
    />
  ));
storiesOf("Alarm", module).add("AlarmFormat", () => <AlarmFormat />);
storiesOf("Graphics", module).add("GraphicsBar", () => <GraphicsBar />);
storiesOf("Screens", module)
  .add("Dashboard", () => <Dashboard />)
  .add("SubUnitsScreen", () => <SubUnitsScreen />)
  .add("GraphicsScreen", () => (
    <GraphicsScreen
      dayLeftPress={() => {}}
      pdday="1st January, 2018"
      dayRightPress={() => {}}
      dayData={graphicsData}
      weekLeftPress={() => {}}
      pdweek={"1st Week,\nJanuary, 2018"}
      weekRightPress={() => {}}
      weekData={graphicsData}
      monthLeftPress={() => {}}
      pdmonth="January, 2018"
      monthRightPres={() => {}}
      monthData={graphicsData}
      yearLeftPress={() => {}}
      pdyear="2018"
      yearRightPress={() => {}}
      yearData={graphicsData}
    />
  ))
  .add("SplashScreen", () => <SplashScreen />)
  .add("Alarms", () => (
    <Alarms inactiveData={alarmData} activeData={alarmData} />
  ));
