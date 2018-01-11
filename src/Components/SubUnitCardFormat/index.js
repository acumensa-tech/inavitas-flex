import React from "react";
import { Text, View, Left, Right, Body, Icon, Button } from "native-base";
import theme from "../../../ColorCommon";
import { Image } from "react-native";
export default class SubUnitsCardFormat extends React.PureComponent {
  render() {
    return (
      <View
        style={{
          backgroundColor: "rgba(0,0,50,0.6)",
          height: 150,
          padding: 5,
          borderRadius: 5,
          marginBottom: 15,
          padding: 16
        }}
      >
        <View
          style={{ flex: 2, flexDirection: "row", justifyContent: "center" }}
        >
          <Left
            style={{
              flex: 1,
              flexDirection: "column"
            }}
          >
            <Text
              style={{
                color: theme.brandSeconday,
                fontSize: 18,
                fontWeight: "500",
                textAlign: "center"
              }}
            >
              {this.props.item.Name
                ? this.props.item.Name.toUpperCase()
                : "test"}
            </Text>
          </Left>
          <Right style={{ flex: 1 }}>
            <Image
              style={{
                width: 60,
                height: 60
              }}
              source={
                this.props.item.alert
                  ? require("../../../Assets/icon-systemstatus.png")
                  : require("../../../Assets/alarm-medium.png")
              }
            />
          </Right>
        </View>
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >
          <Left
            style={{
              flex: 1,
              flexDirection: "column"
            }}
          >
            <Text
              style={{
                color: theme.brandGray,
                fontSize: 18,
                fontWeight: "500"
              }}
            >
              Sub Units
            </Text>
          </Left>
          <Right style={{ flex: 1 }}>
            <Text
              style={{
                color: theme.brandSeconday,
                fontSize: 18,
                fontWeight: "500"
              }}
            >
              {this.props.item.SubUnits === 0
                ? "None"
                : this.props.item.SubUnits}
            </Text>
          </Right>
        </View>
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >
          <Left
            style={{
              flex: 1,
              flexDirection: "column"
            }}
          >
            <Text
              style={{
                color: theme.brandGray,
                fontSize: 18,
                fontWeight: "500"
              }}
            >
              TotalConsumption
            </Text>
          </Left>
          <Right style={{ flex: 1 }}>
            <Text
              style={{
                color: theme.brandSeconday,
                fontSize: 18,
                fontWeight: "500"
              }}
            >
              {this.props.item.consumption
                ? this.props.item.consumption + " kW"
                : "N/A"}
            </Text>
          </Right>
        </View>
      </View>
    );
  }
}
SubUnitsCardFormat.defaultProps = {
  item: {
    totalConsumption: 0,
    totalSubUnits: 0,
    name: "XXX"
  }
};
