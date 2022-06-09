import * as React from "react";
import { useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./MainStack";
import { saveScreenName } from "../components/StatusBar/StatusBar.actions";
import { findActiveRoute } from "../service/navigationService";

export default () => {
  const dispatch = useDispatch();
  return (
    <NavigationContainer
      onStateChange={(data) => dispatch(saveScreenName(findActiveRoute(data)))}
    >
      <MainStack />
    </NavigationContainer>
  );
};
