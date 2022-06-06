import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AboutMeScreen, MenuScreen } from "../screens";
import { ABOUT_ME, MENU } from "../config/navigation.constants";
import { colors } from "../res";

const StackMain = createNativeStackNavigator();

const MainStack = () => (
  <StackMain.Navigator
    initialRoute={MENU}
    screenOptions={{ headerBackTitleVisible: false }}
  >
    <StackMain.Screen
      name={MENU}
      component={MenuScreen}
      options={{ title: "Menu" }}
    />
    <StackMain.Screen
      name={ABOUT_ME}
      component={AboutMeScreen}
      options={{ title: "About Me", headerTintColor: colors.black }}
    />
  </StackMain.Navigator>
);

export default MainStack;
