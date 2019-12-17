import React from "react";
import { StyleSheet } from "react-native";

import { TabOne, TabTwo } from "./client/components";
import {
  ApplicationProvider,
  Layout,
  Tab,
  TabView,
  Text
} from "react-native-ui-kitten";
import { mapping, light, dark } from "@eva-design/eva";
import { default as appTheme } from "./assets/custom-theme.json";

// const themes = { light, dark };
const themes = { light, appTheme };

export default App = () => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "appTheme" : "light";
    setTheme(nextTheme);
  };

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <ApplicationProvider mapping={mapping} theme={themes[theme]}>
      <Layout style={styles.container}>
        <TabView
          selectedIndex={selectedIndex}
          onSelect={setSelectedIndex}
          style={styles.tabs}
        >
          <Tab title="TabOne">
            <Layout style={styles.tabContainer}>
              <TabOne toggleTheme={toggleTheme} />
            </Layout>
          </Tab>
          <Tab title="TabTwo">
            <Layout style={styles.tabContainer}>
              <TabTwo />
            </Layout>
          </Tab>
        </TabView>
      </Layout>
    </ApplicationProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200
  },
  tabs: {
    marginTop: 50
  },
  tabContainer: {
    // minHeight: 500
  }
});
