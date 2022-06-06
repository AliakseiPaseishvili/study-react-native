import "react-native";
import React from "react";
import Menu from "./Menu.screen";

import renderer from "react-test-renderer";

it("renders correctly Menu", () => {
  renderer.create(<Menu />);
});
