import React from "react";
import { Image, Text, Platform } from "react-native";
import { Header, Left, Right, Body, Title, Button } from "native-base";
import theme from "../../../ColorCommon";
import { Constants } from "expo";
export default class HeaderCommon extends React.PureComponent {
  render() {
    return (
      <Header
        style={{
          backgroundColor: theme.brandBlack,
          paddingTop: Constants.statusBarHeight,
          height: 84
        }}
        androidStatusBarColor="#000000"
        iosBarStyle="light-content"
      >
        <Left style={{ flex: 1 }}>
          {this.props.title == "Dashboard" ? (
            <Image
              source={require("../../../Assets/logo-small.png")}
              style={{ width: 50, height: 40, marginTop: -10 }}
              resizeMode="stretch"
              resizeMethod="auto"
            />
          ) : (
            <Button transparent onPress={this.props.backPress}>
              <Image
                source={require("../../../Assets/icon-back.png")}
                style={{ width: 35, height: 35, marginTop: -10 }}
                resizeMode="stretch"
                resizeMethod="auto"
              />
            </Button>
          )}
        </Left>
        <Body
          style={{
            flex: 4
          }}
        >
          <Title
            style={{
              color: theme.brandSeconday,
              fontWeight: "bold",
              fontSize: 20
            }}
          >
            {this.props.currUnit}
          </Title>
          <Text
            style={{
              color: theme.brandBlueLight,
              fontSize: 16,
              fontWeight: "bold"
            }}
          >
            {this.props.title}
          </Text>
        </Body>
        <Right style={{ flex: 1 }}>
          <Button transparent onPress={this.props.menuPress}>
            <Image
              source={require("../../../Assets/icon-menu.png")}
              style={{ width: 35, height: 35, marginTop: -10 }}
              resizeMode="stretch"
              resizeMethod="auto"
            />
          </Button>
        </Right>
      </Header>
    );
  }
}
