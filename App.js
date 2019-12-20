import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { TabOne, TabTwo } from "./client/components";
import {
  ApplicationProvider,
  Layout,
  Tab,
  TabView,
  Text
} from "react-native-ui-kitten";
import { mapping, light, dark } from "@eva-design/eva";
// import { default as appTheme } from "./client/assets/custom-theme.json";

const themes = { light, dark };
// const themes = { light, appTheme };

export default App = () => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };
  let statusColor = "";
  if (theme === "light") {
    statusColor = "dark-content";
  } else {
    statusColor = "light-content";
  }

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <ApplicationProvider mapping={mapping} theme={themes[theme]}>
      <StatusBar barStyle={`${statusColor}`} />
      <Layout style={styles.container}>
        <TabView
          selectedIndex={selectedIndex}
          onSelect={setSelectedIndex}
          style={styles.tabs}
        >
          <Tab title="TabOne">
            <Layout style={styles.tabContainer}>
              <TabOne />
            </Layout>
          </Tab>
          <Tab title="TabTwo">
            <Layout style={styles.tabContainer}>
              <TabTwo toggleTheme={toggleTheme} />
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
    flex: 1,
    marginTop: 50
  }
});
