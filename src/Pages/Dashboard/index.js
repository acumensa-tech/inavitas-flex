import Dashboard from "../../Screens/Dashboard";
import React from "react";
export default class DashboardPage extends React.PureComponent {
  render() {
    return (
      <Dashboard
        value={this.props.userInstantData}
        data={this.props.dashData}
        currUnit={this.props.currentUserUnit.Name}
        subUnitsNumber={this.props.subUnitsNumber}
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
