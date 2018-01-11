import Alarms from "../../Screens/Alarms";
import React from "react";
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
export default class AlarmsPage extends React.PureComponent {
  render() {
    return (
      <Alarms
        inactiveData={alarmData}
        activeData={alarmData}
        currUnit={this.props.currentUserUnit.Name}
        backPress={() => {
          this.props.navigation.goBack();
        }}
        drawerPress={() => {
          this.props.navigation.navigate("DrawerToggle");
        }}
      />
    );
  }
}
