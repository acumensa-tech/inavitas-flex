import React from "react";
import { FlatList, Text } from "react-native";
import styles from "./styles";
import SubUnitCard from "../../Components/SubUnitCardFormat";
const cloneDeep = require("lodash.clonedeep");
export default class SubUnitsList extends React.PureComponent {
  render() {
    if (this.props.data.length > 1)
      return (
        <FlatList
          data={cloneDeep(this.props.data)}
          style={styles.list}
          renderItem={({ item }) => <SubUnitCard item={item} />}
          keyExtractor={(item, index) => index}
        />
      );
    return <Text style={styles.noRecordText}>No Records Available</Text>;
  }
}
SubUnitsList.defaultProps = {
  data: []
};
