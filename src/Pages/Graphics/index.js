import GraphicsScreen from "../../Screens/GraphicsScreen";
import React from "react";
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
export default class Graphics extends React.PureComponent {
  constructor(props) {
    super(props);
    this.today = new Date();
    this.state = {
      month: this.getMonth(this.today),
      day: this.getDay(this.today),
      week: this.getWeek(this.today),
      year: this.getYear(this.today)
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
      <GraphicsScreen
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
        dayData={graphicsData}
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
        weekData={graphicsData}
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
        monthData={graphicsData}
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
        yearData={graphicsData}
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
