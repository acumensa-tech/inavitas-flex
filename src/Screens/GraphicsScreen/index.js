import React from "react";
import { Container, Content, Tabs, Tab } from "native-base";
import Background from "../../Components/Background";
import { Text } from "react-native";
import Format from "./Format";
import Header from "../../Components/Header";
import styles from "./styles";
export default class SubUnitsScreen extends React.PureComponent {
  render() {
    return (
      <Container style={styles.container}>
        <Background />
        <Header
          title="Graphics"
          menuPress={this.props.drawerPress}
          backPress={this.props.backPress}
          currUnit={this.props.currUnit}
        />
        <Tabs
          initialPage={0}
          tabBarUnderlineStyle={styles.tabUnderLineMainStyle}
        >
          <Tab
            activeTabStyle={styles.activeTab}
            tabStyle={styles.tabUnderLineMainStyle}
            textStyle={styles.tabText}
            activeTextStyle={styles.tabText}
            heading="DAY"
          >
            <Format
              onLeftPress={this.props.dayLeftPress}
              pd={this.props.pdday}
              onRightPress={this.props.dayRightPress}
              data={this.props.dayData}
            />
          </Tab>
          <Tab
            activeTabStyle={styles.activeTab}
            tabStyle={styles.tabUnderLineMainStyle}
            textStyle={styles.tabText}
            activeTextStyle={styles.tabText}
            heading="WEEK"
          >
            <Format
              onLeftPress={this.props.weekLeftPress}
              pd={this.props.pdweek}
              onRightPress={this.props.weekRightPress}
              data={this.props.weekData}
            />
          </Tab>
          <Tab
            activeTabStyle={styles.activeTab}
            tabStyle={styles.tabUnderLineMainStyle}
            textStyle={styles.tabText}
            activeTextStyle={styles.tabText}
            heading="MONTH"
          >
            <Format
              onLeftPress={this.props.monthLeftPress}
              pd={this.props.pdmonth}
              onRightPress={this.props.monthRightPress}
              data={this.props.monthData}
            />
          </Tab>
          <Tab
            activeTabStyle={styles.activeTab}
            tabStyle={styles.tabUnderLineMainStyle}
            textStyle={styles.tabText}
            activeTextStyle={styles.tabText}
            heading="YEAR"
          >
            <Format
              onLeftPress={this.props.yearLeftPress}
              pd={this.props.pdyear}
              onRightPress={this.props.yearRightPress}
              data={this.props.yearData}
            />
          </Tab>
        </Tabs>
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
