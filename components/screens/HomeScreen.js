import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

import Header from "../Header";
import Screen from "../Screen";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Header title="Home" />
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
