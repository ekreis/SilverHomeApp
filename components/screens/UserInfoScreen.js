import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";
import Header from "../Header";
import Screen from "../Screen";

function UserInfoScreen(props) {
  return (
    <View style={styles.container}>
      <Header title="User Info" />
    </View>
  );
}

export default UserInfoScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
});
