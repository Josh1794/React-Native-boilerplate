import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Tabs,
  Tab,
  Container,
  Header,
  TabHeading,
  Text,
  Icon
} from "native-base";
import { TabOne, TabTwo } from "./client/components";
import { Ionicons } from "@expo/vector-icons";

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
                  <Icon name="home" />
                  <Text>Tab 1</Text>
                </TabHeading>
              }
            >
              <TabOne />
            </Tab>
            <Tab
              heading={
                <TabHeading>
                  <Icon name="settings" />
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
