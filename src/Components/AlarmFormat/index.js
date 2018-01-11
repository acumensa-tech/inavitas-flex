import React from "react";
import { Image } from "react-native";
import { Text, View, Left, Right, Body, Icon, Button } from "native-base";
import theme from "../../../ColorCommon";
export default class AlarmFormat extends React.PureComponent {
  render() {
    return (
      <View
        style={{
          backgroundColor: "rgba(0,0,50,0.6)",
          height: 100,
          padding: 5,
          borderRadius: 5,
          marginBottom: 20
        }}
      >
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View
            style={{ flex: 4, justifyContent: "space-between", padding: 10 }}
          >
            <View style={{ flex: 1.5 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                  color: theme.brandSeconday
                }}
              >
                {this.props.item.name
                  ? this.props.item.name.toUpperCase()
                  : false}
              </Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Left>
                <Text
                  style={{
                    fontWeight: "400",
                    color: theme.brandGray
                  }}
                >
                  Level
                </Text>
              </Left>
              <Right>
                <Text
                  style={{
                    fontWeight: "400",
                    color: theme.brandSeconday
                  }}
                >
                  {this.props.item.level
                    ? this.props.item.level.toUpperCase()
                    : false}
                </Text>
              </Right>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Left>
                <Text
                  style={{
                    fontWeight: "400",
                    color: theme.brandGray
                  }}
                >
                  Started at
                </Text>
              </Left>
              <Right>
                <Text
                  style={{
                    fontWeight: "400",
                    color: theme.brandSeconday
                  }}
                >
                  {this.props.item.date}
                </Text>
              </Right>
            </View>
          </View>
          <View
            style={{
              flex: 1.3,
              justifyContent: "center",
              alignItems: "center",
              paddingRight: 5
            }}
          >
            <Image
              style={{
                height: 84,
                width: "100%",
                borderRadius: 10
              }}
              source={
                this.props.item.level === "high"
                  ? require("../../../Assets/alarm-high.png")
                  : this.props.item.level === "medium"
                    ? require("../../../Assets/alarm-medium.png")
                    : require("../../../Assets/alarm-low.png")
              }
            />
          </View>
        </View>
      </View>
    );
  }
}
AlarmFormat.defaultProps = {
  item: {}
};
