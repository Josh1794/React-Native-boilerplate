import React from "react";
import { View, StyleSheet } from "react-native";
import { Layout, Text } from "react-native-ui-kitten";

const TabTwo = props => {
  return (
    <Layout style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "orange",
    alignSelf: "center",
    marginTop: 20
  }
});

export default TabTwo;
