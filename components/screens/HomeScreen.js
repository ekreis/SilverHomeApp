import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

import Header from "../Header";
import Screen from "../Screen";

function HomeScreen(props) {
  return (
    <Screen>
      <Header title="Home" />
    </Screen>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
});
