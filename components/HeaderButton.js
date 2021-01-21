import React from "react";
import { Text, StyleSheet, TouchableOpacity, Image, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import colors from "./config/colors";

function HeaderButton({ icon, title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Feather style={styles.icon} name={icon} size={30} color={colors.dark} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    width: 78,
    height: 74,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  text: {
    color: colors.dark,
    fontSize: 18,
    marginTop: 5,
    //textTransform: "uppercase",
    //fontWeight: "bold",
  },
});

export default HeaderButton;
