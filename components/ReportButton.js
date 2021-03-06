import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "./config/colors";

function ReportButton({ title, onPress, color = "medium" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    paddingHorizontal: 45,
    marginVertical: 10,
  },
  text: {
    color: colors.dark,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default ReportButton;
