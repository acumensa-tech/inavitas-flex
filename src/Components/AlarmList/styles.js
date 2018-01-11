import { StyleSheet } from "react-native";
import theme from "../../../ColorCommon";
const styles = StyleSheet.create({
  list: { paddingHorizontal: 16, paddingBottom: 32 },
  noRecordText: {
    height: "100%",
    alignSelf: "center",
    color: theme.brandGray,
    fontSize: 20,
    backgroundColor: "transparent"
  },
  contianer: { flex: 1, backgroundColor: theme.brandBlack }
});
export default styles;
