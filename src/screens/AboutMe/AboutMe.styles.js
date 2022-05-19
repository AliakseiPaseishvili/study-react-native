import { StyleSheet } from "react-native";
import { colors } from "../../res";

export default StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: colors.white },
  contentWrapper: {
    paddingHorizontal: 16,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "500",
  },
});
