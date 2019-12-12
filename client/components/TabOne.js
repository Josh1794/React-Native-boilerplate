import React from "react";
import { Text, Button } from "native-base";
import { View, StyleSheet } from "react-native";

const TabOne = () => {
  return (
    <View>
      <Text style={styles.text}>Hello World</Text>

      <Button style={styles.button}>
        <Text>Button</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    marginTop: 20
  },
  button: {
    width: 80,
    alignSelf: "center",
    marginTop: 50
  }
});

export default TabOne;
