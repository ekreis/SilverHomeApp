import React from "react";
import { View, StyleSheet, Button } from "react-native";
import AppText from "../AppText";

import colors from "../config/colors";
import Header from "../Header";
import Screen from "../Screen";
import ReportButton from "../ReportButton";
import InfoCategory from "../InfoCategory";

function UserInfoScreen(props) {
  return (
    <View style={styles.container}>
      <Header title="User Info" />
      <View style={styles.scrollContainer}>
        <View style={styles.subheader}>
          <AppText style={styles.subheaderText}>
            Push the Generate a Report button to create a printable file. Push
            the + button next to each category to add, edit, or delete any
            information.
          </AppText>
        </View>
        <ReportButton title="Generate a Report" style={styles.reportButton} />
        <InfoCategory
          title="Health Insurance"
          provider="Aetna"
          copay="$20"
          grp="54354658465"
        ></InfoCategory>
      </View>
    </View>
  );
}

export default UserInfoScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  reportButton: {
    width: "50%",
    flex: 1,
  },
  subheader: {
    backgroundColor: colors.medium,
    width: "100%",
  },
  scrollContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  subheaderText: {
    fontSize: 24,
    margin: 10,
  },
});
