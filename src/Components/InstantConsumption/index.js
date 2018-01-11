import React from "react";
import { View, Text, Left, Right } from "native-base";
import theme from "../../../ColorCommon";
export default class InstantConsumption extends React.PureComponent {
  render() {
    return (
      <View
        style={{
          height: 80,
          borderBottomColor: theme.brandBlueLight,
          borderBottomWidth: 1,
          flexDirection: "row"
        }}
      >
        <Left>
          <Text
            style={{
              color: theme.brandBlueLight,
              fontSize: 22,
              fontWeight: "500"
            }}
          >
            {"Instant \nConsumption"}
          </Text>
        </Left>
        <Right>
          <Text
            style={{
              color: theme.brandBlueLight,
              fontSize: 32,
              fontWeight: "bold"
            }}
          >
            {this.props.value == 0 ? "N/A" : this.props.value}
          </Text>
        </Right>
      </View>
    );
  }
}
