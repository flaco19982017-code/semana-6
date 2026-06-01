import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { LoadingSpinner } from "../components/common/LoadingSpinner";

export const StackNavigator = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <LoadingSpinner />;

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
