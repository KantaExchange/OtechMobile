//This is a sample Title component. Modify it to fit your needs.

import { Text, StyleSheet } from "react-native";

import { Colors, Typography } from "Styles";

export default function Title({ children, style }) {
  return (
    <Text
      style={[
        styles.title,
        {
          color: Colors.text,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: Typography.titleMd,
});
