import "react-native";
import React from "react";
import AboutMeScreen from "./AboutMe.screen";

import renderer from "react-test-renderer";

it("renders correctly AboutMeScreen", () => {
  renderer.create(<AboutMeScreen />);
});
