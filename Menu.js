import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dog from "./Dog";
import DogLegal from "./DogLegal";
import { NavigationContainer } from "@react-navigation/native";
import Contador from "./Contador";

const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Dog" component={Dog} />
        <Drawer.Screen name="Dog Legal" component={DogLegal} />
        <Drawer.Screen name="Counter" component={Contador} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}