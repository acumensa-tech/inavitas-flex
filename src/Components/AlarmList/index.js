import React from "react";
import { FlatList, Text } from "react-native";
import { Container } from "native-base";
import AlarmFormat from "../../Components/AlarmFormat";
import Background from "../Background";
import styles from "./styles";
export default class AlarmList extends React.PureComponent {
  render() {
    return (
      <Container style={styles.contianer}>
        <Background />
        {this.props.data.length > 1 ? (
          <FlatList
            data={this.props.data}
            style={styles.list}
            renderItem={({ item }) => <AlarmFormat item={item} />}
            keyExtractor={(item, index) => index}
          />
        ) : (
          <Text style={styles.noRecordText}>No Records Available</Text>
        )}
      </Container>
    );
  }
}
AlarmList.defaultProps = {
  data: []
};
