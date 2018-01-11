import React from "react";
import { Container, Content, Tabs, Tab } from "native-base";
import Background from "../../Components/Background";
import { Text } from "react-native";
import AlarmList from "../../Components/AlarmList";
import Header from "../../Components/Header";
import styles from "./styles";
export default class SubUnitsScreen extends React.PureComponent {
  render() {
    return (
      <Container style={styles.containerContent}>
        <Background />
        <Header
          title="Alarms"
          menuPress={this.props.drawerPress}
          backPress={this.props.backPress}
          currUnit={this.props.currUnit}
        />
        <Content style={styles.containerContent}>
          <Tabs
            initialPage={0}
            tabBarUnderlineStyle={styles.tabUnderLineMainStyle}
          >
            <Tab
              activeTabStyle={styles.activeTab}
              tabStyle={styles.tabUnderLineMainStyle}
              textStyle={styles.tabText}
              activeTextStyle={styles.tabText}
              heading="ACTIVE"
            >
              <AlarmList data={this.props.activeData} />
            </Tab>
            <Tab
              activeTabStyle={styles.activeTab}
              tabStyle={styles.tabUnderLineMainStyle}
              textStyle={styles.tabText}
              activeTextStyle={styles.tabText}
              heading="PASSIVE"
            >
              <AlarmList data={this.props.inactiveData} />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}
SubUnitsScreen.defaultProps = {
  dayLeftPress: () => {},
  pdday: "",
  dayRightPress: () => {},
  dayData: [],
  weekLeftPress: () => {},
  pdweek: "",
  weekRightPress: () => {},
  weekData: [],
  monthLeftPress: () => {},
  pdmonth: "",
  monthRightPres: () => {},
  monthData: [],
  yearLeftPress: () => {},
  pdyear: "",
  yearRightPress: () => {},
  yearData: []
};
