import React from "react";
import { Text, View, Left, Right, Body, Icon, Button } from "native-base";
import theme from "../../../ColorCommon";
export default class GraphicsBar extends React.PureComponent {
  render() {
    return (
      <View
        style={{
          backgroundColor: "rgba(0,0,50,0.6)",
          height: 50,
          padding: 5,
          marginBottom: 15,
          padding: 16,
          flexDirection: "row"
        }}
      >
        <View
          style={{
            width: this.props.prog + "%",
            height: 50,
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: theme.brandBlue
          }}
        />
        <Left>
          <Text
            style={{
              color: theme.brandSeconday,
              fontWeight: "bold",
              fontSize: 18
            }}
          >
            {this.props.index}
          </Text>
        </Left>
        <Right style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Text
            style={{
              color: theme.brandSeconday,
              fontWeight: "bold",
              fontSize: 18,
              marginRight: 20
            }}
          >
            {this.props.consumption}
          </Text>
          <Text style={{ color: theme.brandGray }}>kW</Text>
        </Right>
      </View>
    );
  }
}
