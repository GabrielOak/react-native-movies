import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import MovieList from "../screens/MovieList";

const Routes: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MovieList"
        component={MovieList}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Routes;
