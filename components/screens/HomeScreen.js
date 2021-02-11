import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { FontAwesome5 } from "@expo/vector-icons";

import HomeHeader from "../HomeHeader";
import Screen from "../Screen";
import ServiceButton from "../ServiceButton";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <HomeHeader title="Home" />
      <View style={styles.buttonContainer}>
        <ServiceButton title="Overview" icon="book" />
        <ServiceButton title="User Info" icon="user" />
        <ServiceButton title="Add Services" icon="plus" />
        {/* <ServiceButton />
        <ServiceButton />
        <ServiceButton /> */}
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    alignContent: "flex-start",
    paddingTop: 10,
    paddingBottom: 10,
    overflow: "hidden",
  },
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
});
