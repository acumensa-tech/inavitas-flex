import SplashScreen from "../../Screens/SplashScreen";
import React from "react";
import { NavigationActions } from "react-navigation";
export default class Splash extends React.PureComponent {
  componentDidMount() {
    setTimeout(
      () =>
        this.props.navigation.dispatch(
          NavigationActions.reset({
            index: 0,
            actions: [{ routeName: "Login" }]
          })
        ),
      2000
    );
  }
  render() {
    return <SplashScreen />;
  }
}
