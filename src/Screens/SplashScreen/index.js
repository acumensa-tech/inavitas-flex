import React from "react";
import { Image } from "react-native";
import { Container, Spinner } from "native-base";
import Background from "../../Components/Background";
import styles from "./styles";
export default class SplashScreen extends React.PureComponent {
  render() {
    return (
      <Container style={styles.container}>
        <Background />
        <Image
          source={require("../../../Assets/logo.png")}
          resizeMethod="auto"
          resizeMode="contain"
          style={styles.logo}
        />
        <Spinner color={theme.brandSeconday} />
      </Container>
    );
  }
}
