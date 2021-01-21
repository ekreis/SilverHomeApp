import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";

import colors from "./config/colors";
import AppText from "./AppText";
import HeaderButton from "./HeaderButton";

function Header({ title, icon }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <AppText style={styles.title}>{title}</AppText>
        <View style={styles.buttonsContainer}>
          <HeaderButton title="Tutorial" color="secondary" icon="play" />
          <HeaderButton title="Settings" color="secondary" icon="settings" />
        </View>
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    padding: 10,
    alignSelf: "flex-end",
    justifyContent: 'flex-start'
  },
  container: {
    backgroundColor: colors.primary,
    flexDirection: "row",
    width: "100%",
    height: Constants.statusBarHeight + 110,
  },
  content: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  title: {
    color: colors.white,
    fontSize: 36,
    padding: 10,
    paddingLeft: 14,
    alignSelf: "flex-end",
    justifyContent: "center"
  },
});
