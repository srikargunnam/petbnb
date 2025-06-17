import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

type SpacerProps = {
  size?: number;
  vertical?: boolean;
  style?: ViewStyle;
};

const Spacer: React.FC<SpacerProps> = ({
  size = 16,
  vertical = true,
  style,
}) => <View style={[vertical ? { height: size } : { width: size }, style]} />;

export default Spacer;
