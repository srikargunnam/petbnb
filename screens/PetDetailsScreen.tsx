import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PetDetailsScreen: React.FC = () => (
  <View style={styles.container}>
    <Text>Pet Details Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PetDetailsScreen;
