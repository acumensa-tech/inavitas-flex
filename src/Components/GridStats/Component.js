import React from "react";
import { View, Text } from "native-base";
import theme from "../../../ColorCommon";
export default class ComponentStat extends React.PureComponent {
  render() {
    return (
      <View
        style={{
          borderRadius: 10,
          marginBottom: 5,
          marginRight: 5,
          backgroundColor: this.props.color,
          height: 100,
          padding: 8,
          flex: 1
        }}
      >
        <View
          style={{ alignItems: "flex-start", alignSelf: "flex-start", flex: 1 }}
        >
          <Text
            style={{
              textAlign: "left",
              color: theme.brandSeconday,
              fontSize: 18,
              fontWeight: "600"
            }}
          >
            {this.props.itemName}
          </Text>
        </View>
        <View
          style={{ alignItems: "flex-end", alignSelf: "flex-end", flex: 1 }}
        >
          <Text
            style={{
              textAlign: "left",
              color: theme.brandSeconday,
              fontSize: 16
            }}
          >
            kW
          </Text>
          <Text
            style={{
              textAlign: "left",
              color: theme.brandSeconday,
              fontSize: 20,
              fontWeight: "600"
            }}
          >
            {this.props.unitsInkW == 0 ? "N/A" : this.props.unitsInkW}
          </Text>
        </View>
      </View>
    );
  }
}
