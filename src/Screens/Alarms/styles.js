import { StyleSheet } from "react-native";
import theme from "../../../ColorCommon";
const styles = StyleSheet.create({
  containerContent: {
    flex: 1
  },
  tabUnderLineMainStyle: {
    backgroundColor: "transparent"
  },
  activeTab: { backgroundColor: theme.brandBlue },
  tabText: { color: theme.brandSeconday }
});
export default styles;
