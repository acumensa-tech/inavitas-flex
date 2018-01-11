import React from "react";
import { Container, Content } from "native-base";
import { ImageBackground, Dimensions } from "react-native";
import theme from "../../../ColorCommon";
import InstantConsumption from "../../Components/InstantConsumption";
import GridStats from "../../Components/GridStats";
let { width, height } = Dimensions.get("screen");
import Header from "../../Components/Header";
import StatusCurr from "../../Components/StatusCurr";
import Background from "../../Components/Background";
import styles from "./styles";
export default class SplashScreen extends React.PureComponent {
  render() {
    return (
      <Container style={styles.container}>
        <Background />
        <Header
          title="Dashboard"
          menuPress={this.props.drawerPress}
          backPress={this.props.backPress}
          currUnit={this.props.currUnit}
        />
        <Content style={styles.content}>
          <InstantConsumption value={this.props.value} />
          <GridStats
            day={this.props.data.day}
            week={this.props.data.week}
            month={this.props.data.month}
            year={this.props.data.year}
          />
          <StatusCurr
            icon={require("../../../Assets/icon-systemstatus.png")}
            propName="System Status"
            status="Normal"
          />
          <StatusCurr
            icon={require("../../../Assets/icon-alarms.png")}
            propName="Active Alarms"
            status="3 Alarms"
          />
          <StatusCurr
            icon={require("../../../Assets/icon-subunits.png")}
            propName="Sub Units"
            status={this.props.subUnitsNumber + " Units"}
          />
        </Content>
      </Container>
    );
  }
}
