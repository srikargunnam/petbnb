import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BookingsScreen: React.FC = () => (
  <View style={styles.container}>
    <Text>Bookings Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BookingsScreen;
