import React from "react";
import StoryBookUI from "./storybook/index";
import { ImageBackground, Dimensions } from "react-native";
import { Container, Spinner } from "native-base";
import { AppNavigator } from "./src/AppNavigator";
import Expo from "expo";
let { width, height } = Dimensions.get("screen");
export default class App extends React.Component {
  state = {
    fontsAreLoaded: false
  };
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ fontsAreLoaded: true });
  }
  render() {
    if (this.state.fontsAreLoaded) return <AppNavigator />;
    else return <Expo.AppLoading />;
  }
}
