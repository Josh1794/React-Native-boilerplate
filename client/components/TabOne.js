import React from "react";
import { Text } from "native-base";
import { View, StyleSheet } from "react-native";

const TabOne = () => {
  return (
    <View>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "blue"
  }
});

export default TabOne;
