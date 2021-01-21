import React from "react";
import { Text, StyleSheet, TouchableOpacity, Image, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import colors from "./config/colors";

function ServiceButton({ icon, title, onPress, color = "secondary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <FontAwesome5 style={styles.icon} name={icon} size={60} color={colors.dark} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    borderColor: colors.primary,
    borderWidth: 1,
    //shadowColor: colors.dark,
    //shadowOffset: {width: 2, height: 2},
    //shadowOpacity: 1,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    width: 160,
    height: 160,
  },
  text: {
    color: colors.dark,
    fontSize: 24,
    marginTop: 15,
    textAlign: 'center',
    //textTransform: "uppercase",
    //fontWeight: "bold",
  },
});

export default ServiceButton;
