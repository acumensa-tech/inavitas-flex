import React from "react";
import { Text, Button, Icon, View, Left, Right, Body } from "native-base";
import { Image } from "react-native";
import theme from "../../../ColorCommon";
export default class ChangeDuration extends React.PureComponent {
  render() {
    return (
      <View style={{ height: 60, flexDirection: "row" }}>
        <Left style={{ flex: 1 }}>
          <Button
            style={{
              width: 45,
              height: 45
            }}
            transparent
            onPress={this.props.onLeftPress}
          >
            <Image
              source={require("../../../Assets/icon-left.png")}
              style={{ width: 45, height: 45 }}
            />
          </Button>
        </Left>
        <Body style={{ flex: 3 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "600",
              color: theme.brandSeconday,
              backgroundColor: "transparent",
              textAlign: "center"
            }}
          >
            {this.props.currentPd}
          </Text>
        </Body>
        <Right style={{ flex: 1 }}>
          <Button
            style={{
              width: 45,
              height: 45
            }}
            transparent
            onPress={this.props.onRightPress}
          >
            <Image
              source={require("../../../Assets/icon-right.png")}
              style={{ width: 45, height: 45 }}
            />
          </Button>
        </Right>
      </View>
    );
  }
}
