import "react-native-gesture-handler";
import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthNavigator from "./navigations/AuthNavigator";

const Tab = createBottomTabNavigator();



export const AppNavigator = () => {
  return (
    <AuthNavigator />
    // <Tab.Navigator>
    //   <Tab.Screen name="Feed" component={FeedScreen} />
    //   <Tab.Screen name="Apps" component={AppsScreen} />
    //   <Tab.Screen name="Messages" component={MessagesScreen} />
    //   <Tab.Screen name="Account" component={AccountScreen} />
    // </Tab.Navigator>
  );
};

export default function App() {
  // isAuthenticated = is...

  return (
    <NavigationContainer >
      {/* {isAuthenticated ? AuthNavigator : DrawerNavigator } */}

      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
});
