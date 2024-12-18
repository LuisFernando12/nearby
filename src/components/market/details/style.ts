import { StyleSheet } from "react-native";
import { colors, fontFamily } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    padding: 32,
    paddingBottom: 0,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: colors.gray[100],
  },
  name: {
    fontSize: 20,
    fontFamily: fontFamily.bold,
    color: colors.gray[600],
  },
  description: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: 12,
    marginBottom: 30,
    lineHeight: 22,
  },
  couponsBox: {
    height: 30,
    backgroundColor: colors.red.light,
    flexDirection: "row",
    borderRadius: 5,
    gap: 10,
    paddingLeft: 10,
    alignItems: "center",
    marginBottom: 20
  },
  couponsTotal: {
    color: colors.gray[500],
    fontSize: 16,
    fontFamily: fontFamily.bold,
  },
  couponsText: {
    color: colors.gray[600],
    fontSize: 16,
    fontFamily: fontFamily.regular,
    lineHeight: 22.4,
    flex: 1,
  },
  group: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
    paddingBottom: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.gray[500],
    marginBottom: 12,
  },
  rule: {},
});
