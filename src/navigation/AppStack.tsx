import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AppStackParamList } from "./typeNavigation";
import { HomeScreen } from "../screens/app/HomeScreen";
import { DetailScreen } from "../screens/app/DetailScreen";

const Stack = createStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#FFFFFF" },
        headerTintColor: "#4F46E5",
        headerTitleStyle: { fontWeight: "700", color: "#1A202C" },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ title: "Detalle del Personaje" }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
