import React from "react";
import { Text } from "native-base";
import { View, StyleSheet } from "react-native";

const TabTwo = () => {
  return (
    <View>
      <Text style={styles.text}>Hello World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "orange",
    alignSelf: "center",
    marginTop: 20
  }
});

export default TabTwo;
