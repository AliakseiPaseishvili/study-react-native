import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Ionicons";
import { Button } from "../";
import styles from "./ListItem.styles";

const ListItem = ({ onPress, children }) => (
  <Button onPress={onPress} style={styles.wrapper}>
    {children}
    <Icon name="chevron-forward-outline" size={20} />
  </Button>
);

ListItem.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};

export default ListItem;
