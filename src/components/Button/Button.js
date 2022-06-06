import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";

const Button = ({ onPress, children, style }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    {children}
  </TouchableOpacity>
);

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  style: PropTypes.object,
};

export default Button;
