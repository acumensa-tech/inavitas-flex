import React from "react";
import { Container, Content, View } from "native-base";
import ChangeDuration from "../../../Components/ChangeDurationSubUnits";
import GraphicsBarList from "../../../Components/GraphicsBarList";
import Background from "../../../Components/Background";
import styles from "./styles";
export default class SplashScreen extends React.PureComponent {
  render() {
    return (
      <Container style={styles.containerContent}>
        <Background />
        <Content style={styles.containerContent}>
          <View style={styles.duration}>
            <ChangeDuration
              currentPd={this.props.pd}
              onRightPress={this.props.onRightPress}
              onLeftPress={this.props.onLeftPress}
            />
          </View>
          <GraphicsBarList data={this.props.data} />
        </Content>
      </Container>
    );
  }
}
