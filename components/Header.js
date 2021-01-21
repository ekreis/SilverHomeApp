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
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  container: {
    backgroundColor: colors.primary,
    flexDirection: "row",
    width: "100%",
    height: Constants.statusBarHeight + 100,
  },
  content: {
    flexDirection: "row",
    flexGrow: 100,
    //alignItems: "center",
    width: "100%",
    justifyContent: 'flex-end',
  },
  title: {
    color: colors.white,
    fontSize: 36,
    padding: 10,
    paddingRight: 60,
    alignSelf: "flex-end",
  },
});
