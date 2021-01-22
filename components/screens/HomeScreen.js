import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

import HomeHeader from "../HomeHeader";
import Screen from "../Screen";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <HomeHeader title="Home" />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
});
