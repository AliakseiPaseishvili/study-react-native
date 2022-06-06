import { StyleSheet } from "react-native";
import { colors } from "../../res";

export default StyleSheet.create({
  wrapper: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
