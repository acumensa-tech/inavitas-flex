import React from "react";
import { Text, View, Left, Right, Body, Icon, Button } from "native-base";
import theme from "../../../ColorCommon";
import { Image } from "react-native";
export default class HeaderCommon extends React.PureComponent {
  render() {
    return (
      <View
        style={{
          backgroundColor: "rgba(0,0,50,0.6)",
          height: 50,
          padding: 5,
          flexDirection: "row",
          borderRadius: 5,
          marginBottom: 5
        }}
      >
        <Left style={{ flex: 1 }}>
          <Image
            style={{
              width: 40,
              height: 40
            }}
            source={this.props.icon}
          />
        </Left>
        <Body style={{ flex: 3, alignItems: "flex-start" }}>
          <Text style={{ color: theme.brandSeconday, fontSize: 16 }}>
            {this.props.propName}
          </Text>
        </Body>
        <Right style={{ flex: 3 }}>
          <Text
            style={{
              color: theme.brandSeconday,
              fontSize: 20,
              fontWeight: "500"
            }}
          >
            {this.props.status}
          </Text>
        </Right>
      </View>
    );
  }
}
