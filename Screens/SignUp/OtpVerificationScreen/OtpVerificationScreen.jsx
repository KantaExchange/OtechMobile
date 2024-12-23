//Modify the code below. Complete the code according to the instructions provided

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function OtpVerificationScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Otp Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("PersonalInfo")}
        style={styles.button}
      >
        <Text>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.button}
      >
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});
