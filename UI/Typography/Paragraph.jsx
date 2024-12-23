// this is a sample component for a paragraph text, modify it to fit your needs

import { Text, StyleSheet } from "react-native";

export default function Paragraph({ children, style }) {
  return <Text style={[styles.paragraph, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 16,
    fontWeight: "normal",
  },
});
