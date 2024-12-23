//This is a sample Description component. Modify it to fit your needs.

import { Text, StyleSheet } from "react-native";

export default function Description({ children, style }) {
  return <Text style={[styles.description, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  description: {
    fontSize: 14,
    fontWeight: "normal",
  },
});
