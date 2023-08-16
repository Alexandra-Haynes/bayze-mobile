import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const FeedScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Feed goes here</Text>
    </View>
  );
};

const AppsScreen = () => {
  return (
    <View>
      <Text>my apps</Text>
    </View>
  );
};

const MessagesScreen = () => {
  return (
    <View>
      <Text>your messages</Text>
    </View>
  );
};

const AccountScreen = () => {
  return (
    <View>
      <Text>account</Text>
    </View>
  );
};

export const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Apps" component={AppsScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
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
