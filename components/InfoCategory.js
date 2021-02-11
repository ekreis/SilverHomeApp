import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Button,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import HeaderButton from "./HeaderButton";
import AppText from "./AppText";
import colors from "./config/colors";

function InfoCategory({ title, provider, copay, grp, onPress, color = "primary" }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>{title}</AppText>
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <AppText style={styles.textContainer}>Provider: {provider}</AppText>
          <AppText style={styles.textContainer}>Copay: {copay}</AppText>
          <AppText style={styles.textContainer}>GRP Number: {grp}</AppText>
        </View>
        <TouchableOpacity style={styles.button} title="+">
          <Feather name="plus" size={40} color={colors.dark} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    borderColor: colors.dark,
    borderWidth: 4,
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    width: 48,
    borderRadius: 30,
  },
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  infoContainer: {
    backgroundColor: colors.white,
    flexDirection: "row",
    padding: 20,
    borderRadius: 10,
  },
  textContainer: {
    fontSize: 18,
    alignSelf: 'flex-start',
    paddingRight: 20,
    width: 260,
    //flexWrap: 'wrap',
    flexDirection: 'column'
  },
  title: {
    fontSize: 24,
  },
});

export default InfoCategory;
