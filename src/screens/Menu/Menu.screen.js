import React from "react";
import { ScrollView, Text } from "react-native";
import { ListItem } from "../../components";
import { ABOUT_ME } from "../../config/navigation.constants";
import styles from "./Menu.styles";

const MenuScreen = ({ navigation }) => (
  <ScrollView style={styles.wrapper}>
    <ListItem onPress={() => navigation.navigate(ABOUT_ME)}>
      <Text>About Me</Text>
    </ListItem>
  </ScrollView>
);

export default MenuScreen;
