import { ImageBackground, Dimensions } from "react-native";
import React from "react";
let { width, height } = Dimensions.get("screen");
export default class background extends React.PureComponent {
  render() {
    return (
      <ImageBackground
        source={require("../../../Assets/background.png")}
        style={{
          height: height,
          width: width,
          position: "absolute",
          top: 0,
          left: 0
        }}
      />
    );
  }
}
