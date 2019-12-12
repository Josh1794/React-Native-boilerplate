import React from "react";
import { StyleSheet, View } from "react-native";
import { Tabs, Tab, Container, Header, TabHeading, Text } from "native-base";
import { TabOne, TabTwo } from "./client/components";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Container>
          <Header hasTabs />
          <Tabs>
            <Tab
              heading={
                <TabHeading>
                  <Text>Tab 1</Text>
                </TabHeading>
              }
            >
              <TabOne />
            </Tab>
            <Tab
              heading={
                <TabHeading>
                  <Text>Tab 2</Text>
                </TabHeading>
              }
            >
              <TabTwo />
            </Tab>
          </Tabs>
        </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
