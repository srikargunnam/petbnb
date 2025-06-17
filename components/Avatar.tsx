import React from "react";
import { Image, StyleSheet, ImageStyle } from "react-native";

type AvatarProps = {
  uri: string;
  size?: number;
  style?: ImageStyle;
};

const Avatar: React.FC<AvatarProps> = ({ uri, size = 48, style }) => (
  <Image
    source={{ uri }}
    style={[
      styles.avatar,
      { width: size, height: size, borderRadius: size / 2 },
      style,
    ]}
    resizeMode="cover"
  />
);

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: "#eee",
  },
});

export default Avatar;
