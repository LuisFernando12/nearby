import { Platform, StyleSheet } from "react-native";
import { colors, fontFamily } from "../../styles/theme";
const isAndroid = Platform.OS === "android";
export const styles = StyleSheet.create({
  container: {
    height: 150,
    width: "90%",
    borderRadius: 20,
    backgroundColor: colors.gray[100],
    bottom: 40,
    left: 20,
    padding: 15,
    position: "absolute",
    zIndex: 1,
    shadowColor: colors.gray[isAndroid ? 600 : 300],
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  headerTitle: {
    flexDirection: "row",
    gap: 10,
  },
  coupons: {
    width: 45,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: colors.red.light,
    paddingLeft: 5,
  },
  couponsText: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[600],
  },
  titleHeader: {
    fontFamily: fontFamily.bold,
    fontSize: 20,
  },
  content: {
    flexDirection: "column",
    marginTop: 20,
  },
  text: {
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    fontSize: 15,
  },
});
