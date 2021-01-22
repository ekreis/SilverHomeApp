import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

import Header from "../HomeHeader";
import Screen from "../Screen";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Header title="User Info" />
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
