import SubUnitsScreen from "../../Screens/SubUnitsScreen";
import React from "react";
import {
  subUnitsConsumptionDay,
  subUnitsConsumptionMonth,
  subUnitsConsumptionWeek,
  subUnitsConsumptionYear,
  subUnits
} from "../../data";
const mon = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
export default class SubUnitsPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.today = new Date();
    this.state = {
      month: this.getMonth(this.today),
      day: this.getDay(this.today),
      week: this.getWeek(this.today),
      year: this.getYear(this.today),
      dayData: this.props.subUnitsData,
      weekData: this.props.subUnitsData,
      yearData: this.props.subUnitsData,
      monthData: this.props.subUnitsData
    };
  }
  getMonth(date) {
    return mon[date.getUTCMonth()] + ", " + this.getYear(date);
  }
  getDay(date) {
    return date.getDate() + " " + this.getMonth(date);
  }
  getWeek(date) {
    return "Week " + date.getWeek() + ",\n" + this.getYear(date);
  }
  getYear(date) {
    return date.getFullYear();
  }
  render() {
    return (
      <SubUnitsScreen
        dayLeftPress={(() => {
          let x = this.today;
          x.setDate(x.getDate() - 1);
          this.setState({ day: this.getDay(x) });
        }).bind(this)}
        pdday={this.state.day}
        dayRightPress={(() => {
          let x = this.today;
          x.setDate(x.getDate() + 1);
          if (x > new Date()) {
            this.today = new Date();
            x = this.today;
          }
          this.setState({ day: this.getDay(x) });
        }).bind(this)}
        dayData={this.state.dayData}
        weekLeftPress={(() => {
          let x = this.today;
          x.setDate(x.getDate() - 7);
          this.setState({ week: this.getWeek(x) });
        }).bind(this)}
        pdweek={this.state.week}
        weekRightPress={(() => {
          let x = this.today;
          x.setDate(x.getDate() + 7);
          if (x > new Date()) {
            this.today = new Date();
            x = this.today;
          }
          this.setState({ week: this.getWeek(x) });
        }).bind(this)}
        weekData={this.state.weekData}
        monthLeftPress={(() => {
          let x = this.today;
          x.setMonth(x.getMonth() - 1);
          this.setState({ month: this.getMonth(x) });
        }).bind(this)}
        pdmonth={this.state.month}
        monthRightPress={(() => {
          let x = this.today;
          x.setMonth(x.getMonth() + 1);
          if (x > new Date()) {
            this.today = new Date();
            x = this.today;
          }
          this.setState({ month: this.getMonth(x) });
        }).bind(this)}
        monthData={this.state.monthData}
        yearLeftPress={(() => {
          let x = this.today;
          x.setFullYear(x.getFullYear() - 1);
          this.setState({ year: this.getYear(x) });
        }).bind(this)}
        pdyear={this.state.year}
        yearRightPress={(() => {
          let x = this.today;
          x.setFullYear(x.getFullYear() + 1);
          if (x > new Date()) {
            this.today = new Date();
            x = this.today;
          }
          this.setState({ year: this.getYear(x) });
        }).bind(this)}
        yearData={this.state.yearData}
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
Date.prototype.getWeek = function() {
  var date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  var week1 = new Date(date.getFullYear(), 0, 4);
  return (
    1 +
    Math.round(
      ((date.getTime() - week1.getTime()) / 86400000 -
        3 +
        (week1.getDay() + 6) % 7) /
        7
    )
  );
};
Date.prototype.getWeekYear = function() {
  var date = new Date(this.getTime());
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  return date.getFullYear();
};
