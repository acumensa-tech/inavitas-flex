import React from "react";
import { FlatList, Text } from "react-native";
import GraphicsBar from "../../Components/GraphicsBar";
import styles from "./styles";
export default class GraphicsBarList extends React.PureComponent {
  render() {
    if (this.props.data.length > 1)
      return (
        <FlatList
          data={this.props.data}
          style={styles.list}
          renderItem={({ item, index }) => (
            <GraphicsBar
              index={index + 1}
              consumption={item}
              prog={Math.random() * 100}
            />
          )}
          keyExtractor={(item, index) => index}
        />
      );
    return <Text style={styles.noRecordText}>No Records Available</Text>;
  }
}
GraphicsBarList.defaultProps = {
  data: []
};
